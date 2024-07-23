import { FastifyReply, FastifyRequest } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {

    async handle(request: FastifyRequest, response: FastifyReply) {

        const { checkIn, checkOut } = request.body as {
            checkIn: string
            checkOut: string
        }

        const listCustomersService = new ListCustomersService()

        try {
            const result = await listCustomersService.execute({ checkIn, checkOut })
            response.send(result)
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
}

export {ListCustomersController}