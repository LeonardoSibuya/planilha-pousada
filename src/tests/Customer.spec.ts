import { expect, test } from 'vitest'
import { CreateCustomerService } from '../services/CreateCustomerService'

test('create an customer', async () => {
    const customerService = new CreateCustomerService()

    const startDate = new Date()
    const endDate = new Date()

    endDate.setDate(endDate.getDate() + 1)

    const customerData = {
        name: "john doe",
        quantityOfPeople: 2,
        roomNumber: 4,
        checkInDate: startDate,
        checkOutDate: endDate,
        daysOfWeek: "seg a ter",
        amount: 1500,
        deposit: 1000,
        withCoffee: "sim",
        comments: "sem comentarios",
    }

    const result = await customerService.execute(customerData)

    expect(result.data).toMatchObject({
        name: 'john doe',
        quantityOfPeople: 2,
        roomNumber: 4,
        checkInDate: startDate,
        checkOutDate: endDate,
        daysOfWeek: 'seg a ter',
        amount: 1500,
        deposit: 1000,
        debt: 500,
        withCoffee: 'sim',
        comments: 'sem comentarios',
    })
})
