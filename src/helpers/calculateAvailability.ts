import type { Reservation } from '../types/bookingTypes.js'
import type { Hotel } from '../types/hotelTypes.js'
import parseDate from './parseDate.js'

const calculateAvailability = (
    hotelId: string,
    roomType: string,
    arrival: string,
    departure: string,
    hotels: Hotel[],
    bookings: Reservation[],
) => {
    const hotel = hotels.find(h => h.id === hotelId)

    if (!hotel)
        throw new ReferenceError(`There is no hotel with ${hotelId} id!`)

    const roomsOfType = hotel.roomTypes.filter(r => r.code === roomType)

    if (!roomsOfType.length)
        throw new ReferenceError(
            `There is no any ${roomType} room in hotel with ${hotel} id.`,
        )

    const bookingsOfType = bookings.filter(
        b =>
            b.hotelId === hotelId &&
            b.roomType === roomType &&
            parseDate(arrival) >= parseDate(b.arrival) &&
            parseDate(b.departure) < parseDate(departure),
    )

    return roomsOfType.length - bookingsOfType.length
}

export default calculateAvailability
