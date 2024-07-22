export interface CustomerProps {
    id?: string
    name: string
    quantityOfPeople: number
    roomNumber: number
    checkInDate: Date
    checkOutDate: Date
    daysOfWeek: string
    amount: number
    deposit: number
    withCoffee: string
    comments: string
}