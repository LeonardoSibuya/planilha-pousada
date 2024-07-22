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

        const checkIn = checkInDate.getDate()
        const checkOut = checkOutDate.getDate()

        try {
            if (checkIn == checkOut) {
                throw new Error('As datas de check-in e check-out devem ser diferentes')
            } else if (checkInDate == null || checkOutDate == null) {
                throw new Error('As datas de check-in e check-out não podem ser NULL')
            }

            const newCustomer = await prismaClient.customer.create({
                data: {
                    id: id,
                    name: name,
                    quantityOfPeople: quantityOfPeople,
                    roomNumber: roomNumber,
                    checkInDate: checkInDate,
                    checkOutDate: checkOutDate,
                    daysOfWeek: daysOfWeek,
                    amount: amount,
                    deposit: deposit,
                    debt: amount - deposit,
                    withCoffee: withCoffee,
                    comments: comments,
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
