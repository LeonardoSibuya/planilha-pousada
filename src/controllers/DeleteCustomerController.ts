import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";


class DeleteCustomerController {
    async handle(request: FastifyRequest, response: FastifyReply) {
        
        const { id } = request.query as {id: string} 

        const customerDeleted = new DeleteCustomerService()

        const customer = await customerDeleted.execute({ id })

        response.send(customer)
    }
}

export { DeleteCustomerController }