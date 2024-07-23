import { parse } from 'date-fns'
import { CustomerProps } from "../entities/customer"
import prismaClient from "../prisma"

class CreateCustomerService {

    async execute({
        id,
        checkInDate,
        checkOutDate,
        comments,
        daysOfWeek,
        amount,
        deposit,
        name,
        quantityOfPeople,
        roomNumber,
        withCoffee
    }: CustomerProps) {

        const checkInParsed = parse(checkInDate, 'dd/MM/yyyy', new Date())
        const checkOutParsed = parse(checkOutDate, 'dd/MM/yyyy', new Date())

        try {
            if (checkInParsed >= checkOutParsed) {
                throw new Error('O check-out deve ser após a data de check-in')
            } else if (checkInParsed == null || checkOutParsed == null) {
                throw new Error('As datas de check-in e check-out não podem ser NULL')
            }

            if (deposit > amount) throw new Error("Deposito não pode ser maior que o total")

            let week = await prismaClient.week.findFirst()

            if (!week) {
                week = await prismaClient.week.create({
                    data: {}
                })
            }

            const newCustomer = await prismaClient.customer.create({
                data: {
                    id: id,
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
                    weekId: week.id
                },
            })

            return { message: "Cliente criado com sucesso!", data: newCustomer }
        }
        catch (error) {
            throw new Error(`ERRO: ${error}`)
        }
    }

}

export { CreateCustomerService };
