import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";


class UpdateCustomerController {

    async handle(request: FastifyRequest, response: FastifyReply) {
        const {
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
        } = request.body as {
            id: string,
            checkInDate: string,
            checkOutDate: string,
            comments: string,
            daysOfWeek: string,
            amount: number,
            deposit: number,
            name: string,
            quantityOfPeople: number,
            roomNumber: number,
            withCoffee: string,
        }

        const updateCustomerService = new UpdateCustomerService()

        try {
            const result = await updateCustomerService.execute({
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
                comments,
            })

            response.send(result)
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
}

export { UpdateCustomerController }