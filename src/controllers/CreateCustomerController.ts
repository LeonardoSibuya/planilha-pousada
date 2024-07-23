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

        const createCustomerService = new CreateCustomerService()

        const result = await createCustomerService.execute({
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
    }
}

export { CreateCustomerController }