import { parse } from "date-fns";
import { CustomerProps } from "../entities/customer";
import prismaClient from "../prisma";

class UpdateCustomerService {

    async execute({
        id,
        name,
        quantityOfPeople,
        roomNumber,
        checkInDate,
        checkOutDate,
        daysOfWeek,
        amount,
        deposit,
        withCoffee,
        comments
    }: CustomerProps) {

        if (!id) throw new Error("ID inválido");

        const checkInParsed = parse(checkInDate, 'dd/MM/yyyy', new Date())
        const checkOutParsed = parse(checkOutDate, 'dd/MM/yyyy', new Date())

        if (checkInParsed >= checkOutParsed) {
            throw new Error('O check-out deve ser após a data de check-in')
        } else if (checkInParsed == null || checkOutParsed == null) {
            throw new Error('As datas de check-in e check-out não podem ser NULL')
        }

        if (deposit > amount) throw new Error("Deposito não pode ser maior que o total");

        try {
            const updateCustomer = await prismaClient.customer.update({
                where: {
                    id: id,
                },
                data: {
                    name: name,
                    quantityOfPeople: quantityOfPeople,
                    roomNumber: roomNumber,
                    checkInDate: checkInParsed,
                    checkOutDate: checkOutParsed,
                    daysOfWeek: daysOfWeek,
                    amount: amount,
                    deposit: deposit,
                    debt: amount - deposit,
                    withCoffee: withCoffee,
                    comments: comments,
                }
            })

            return { message: "Atualizado com sucesso!", data: updateCustomer }
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
}

export { UpdateCustomerService }