import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";

export const routes = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {

    fastify.get("/week", async (request: FastifyRequest, response: FastifyReply) => {
        return CreateCustomerController
    })

    fastify.post("/teste", async (request: FastifyRequest, response: FastifyReply) => {
        return new CreateCustomerController().handle(request, response)
    })
}