import calculateAvailability from '../helpers/calculateAvailability.js'
import parseCommand from '../helpers/parseCommand.js'
import type { Reservation } from '../types/booking'
import type { Hotel } from '../types/hotel'

export default function handleUserCommand(
    command: string,
    hotels: Hotel[],
    bookings: Reservation[],
) {
    const { hotelId, startDate, endDate, roomType } = parseCommand(command)
    const availCount = calculateAvailability(
        hotelId,
        roomType,
        startDate,
        endDate,
        hotels,
        bookings,
    )
    console.log(
        `\n${command}: ${availCount < 1 ? '\x1b[31m' : '\x1b[32m'}${availCount}\x1b[0m`,
    )
}
