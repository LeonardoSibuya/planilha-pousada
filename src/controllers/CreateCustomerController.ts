import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
    async handle(request: FastifyRequest, response: FastifyReply) {

        const {
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
            checkInDate: Date,
            checkOutDate: Date,
            comments: string,
            daysOfWeek: string,
            amount: number,
            deposit: number,
            name: string,
            quantityOfPeople: number,
            roomNumber: number,
            withCoffee: string,
        }

        const createCustomerService = new CreateCustomerService()

        const result = await createCustomerService.execute({
            checkInDate,
            checkOutDate,
            comments,
            daysOfWeek,
            amount,
            deposit,
            name,
            quantityOfPeople,
            roomNumber,
            withCoffee,
        })

        response.send(result)
    }
}

export { CreateCustomerController }