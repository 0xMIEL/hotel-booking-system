import loadJSONData from '../helpers/loadJSONData.ts'
import type { Reservation } from './../types/bookingTypes'

describe('loadJSONData', () => {
    it('should load and parse JSON data from a file', async () => {
        const filePath = './data/bookings.json'
        const data = await loadJSONData<Reservation[]>(filePath)
        expect(data).toEqual([
            {
                hotelId: 'H1',
                arrival: '20240901',
                departure: '20240903',
                roomType: 'DBL',
                roomRate: 'Prepaid',
            },
            {
                hotelId: 'H1',
                arrival: '20240902',
                departure: '20240905',
                roomType: 'SGL',
                roomRate: 'Standard',
            },
        ])
    })

    it('should throw an error if the file does not exist', async () => {
        const filePath = './test/nonExistentFile.json'
        await expect(loadJSONData<Reservation[]>(filePath)).rejects.toThrow()
    })

    it('should throw an error if the JSON is malformed', async () => {
        const filePath = '../../data/wrong.json'
        await expect(loadJSONData<Reservation[]>(filePath)).rejects.toThrow()
    })
})
