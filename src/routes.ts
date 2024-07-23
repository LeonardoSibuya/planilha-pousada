import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { UpdateCustomerController } from "./controllers/UpdateCustomerController";

export const routes = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {

    fastify.post("/listcustomer", async (request: FastifyRequest, response: FastifyReply) => {
        return new ListCustomersController().handle(request, response)
    })

    fastify.post("/createcustomer", async (request: FastifyRequest, response: FastifyReply) => {
        return new CreateCustomerController().handle(request, response)
    })

    fastify.put("/updatecustomer", async (request: FastifyRequest, response: FastifyReply) => {
        return new UpdateCustomerController().handle(request, response)
    })

    fastify.delete("/deletecustomer", async (request: FastifyRequest, response: FastifyReply) => {
        return new DeleteCustomerController().handle(request, response)
    })
}