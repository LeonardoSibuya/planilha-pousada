import { expect, test } from "vitest";
import { UpdateCustomerService } from "../services/UpdateCustomerService";
import { formatISO, parseISO } from "date-fns";

test("update a customer", async () => {

    const updateCustomer = new UpdateCustomerService()

    const customerData = {
        id: "669ff3c6f9c5d04dfe03e5bb",
        name: "Jade Melissa",
        quantityOfPeople: 8,
        roomNumber: 2,
        checkInDate: "23/07/2024",
        checkOutDate: "24/07/2024",
        daysOfWeek: "ter - qua",
        amount: 2000,
        deposit: 1400,
        withCoffee: "sim",
        comments: "Cliente suíte",
    }

    const result = await updateCustomer.execute(customerData)

    const expectedCheckInDate = parseISO(formatISO(new Date(2024, 6, 23)))
    const expectedCheckOutDate = parseISO(formatISO(new Date(2024, 6, 24)))

    expect(result.data).toMatchObject({
        name: "Jade Melissa",
        quantityOfPeople: 8,
        roomNumber: 2,
        checkInDate: expectedCheckInDate,
        checkOutDate: expectedCheckOutDate,
        daysOfWeek: "ter - qua",
        amount: 2000,
        deposit: 1400,
        debt: 600,
        withCoffee: "sim",
        comments: "Cliente suíte",
    })
})