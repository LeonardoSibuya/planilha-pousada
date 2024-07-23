import { expect, test } from 'vitest'
import { CreateCustomerService } from '../services/CreateCustomerService'
import { formatISO, parseISO } from 'date-fns'

test('create a customer', async () => {
    const customerService = new CreateCustomerService()

    const customerData = {
        name: "Fulano pelo Teste",
        quantityOfPeople: 2,
        roomNumber: 4,
        checkInDate: "10/07/2024",
        checkOutDate: "11/07/2024",
        daysOfWeek: "seg a ter",
        amount: 1500,
        deposit: 1000,
        withCoffee: "sim",
        comments: "sem comentarios",
    }

    const result = await customerService.execute(customerData)

    const expectedCheckInDate = parseISO(formatISO(new Date(2024, 6, 10)))
    const expectedCheckOutDate = parseISO(formatISO(new Date(2024, 6, 11)))

    expect(result.data).toMatchObject({
        name: 'Fulano pelo Teste',
        quantityOfPeople: 2,
        roomNumber: 4,
        checkInDate: expectedCheckInDate,
        checkOutDate: expectedCheckOutDate,
        daysOfWeek: 'seg a ter',
        amount: 1500,
        deposit: 1000,
        debt: 500,
        withCoffee: 'sim',
        comments: 'sem comentarios',
    })
})
