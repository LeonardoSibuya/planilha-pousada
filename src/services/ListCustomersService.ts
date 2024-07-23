import { parse } from "date-fns";
import prismaClient from "../prisma";

interface DatesProps {
    checkIn: string
    checkOut: string
}

class ListCustomersService {

    async execute({ checkIn, checkOut }: DatesProps) {

        const checkInParsed = parse(checkIn, 'dd/MM/yyyy', new Date())
        const checkOutParsed = parse(checkOut, 'dd/MM/yyyy', new Date())

        if (checkInParsed >= checkOutParsed) {
            throw new Error('O check-out deve ser após a data de check-in')
        }

        const customers = await prismaClient.customer.findMany({
            where: {
                checkInDate: {
                    gte: checkInParsed
                },
                checkOutDate: {
                    lte: checkOutParsed
                }
            },
            include: {
                week: true,
            }
        })

        return customers
    }
}

export { ListCustomersService }