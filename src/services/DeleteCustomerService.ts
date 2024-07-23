import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string
}

class DeleteCustomerService {

    async execute({ id }: DeleteCustomerProps) {

        if (!id) throw new Error("ID inválido");

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) throw new Error("Usúario não encontrado");

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { message: `Usúario deletado com sucesso!` }
    }
}

export { DeleteCustomerService }