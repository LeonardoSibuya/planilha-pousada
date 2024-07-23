import { expect, test } from 'vitest'
import { ListCustomersService } from '../services/ListCustomersService'

test('List customers within date range', async () => {
    const listCustomersService = new ListCustomersService()

    const dates = {
        checkIn: "01/07/2024",
        checkOut: "31/07/2024"
    }

    const result = await listCustomersService.execute(dates)

    expect(result).toBeInstanceOf(Array)
})