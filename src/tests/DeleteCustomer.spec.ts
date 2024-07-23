import { test, expect } from "vitest";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

test('Delete customer whith Id', async () => {
    const deleteCustumerService = new DeleteCustomerService()

    const customerId = {
        id: "66a01dccc90ca04ceb5e92c0"
    }

    const result = await deleteCustumerService.execute(customerId)

    expect(result).toEqual({ message: 'Usúario deletado com sucesso!' });
})