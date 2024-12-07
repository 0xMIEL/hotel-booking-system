import type { Reservation } from '../types/booking'
import type { Hotel } from '../types/hotel'
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

    const roomsOfType = hotel.rooms.filter(r => r.roomType === roomType)

    if (!roomsOfType.length)
        throw new ReferenceError(
            `There is no any ${roomType} room in hotel with ${hotel} id.`,
        )

    const takenRooms = bookings.filter(
        b =>
            b.hotelId === hotelId &&
            b.roomType === roomType &&
            !(
                parseDate(b.departure) < parseDate(arrival) ||
                parseDate(b.arrival) > parseDate(departure)
            ),
    )

    return roomsOfType.length - takenRooms.length
}

export default calculateAvailability
