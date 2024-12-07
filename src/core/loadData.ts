import loadJSONData from '../helpers/loadJSONData.js'
import type { Reservation } from '../types/booking'
import type { Hotel } from '../types/hotel'

const loadData = async (options: Record<string, string>) => {
    const hotels = await loadJSONData<Hotel[]>(options['--hotels'])
    const bookings = await loadJSONData<Reservation[]>(options['--bookings'])
    return { hotels, bookings }
}

export default loadData
