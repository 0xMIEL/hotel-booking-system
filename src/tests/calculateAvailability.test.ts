import calculateAvailability from '../helpers/calculateAvailability'

describe('calculateAvailability', () => {
    const hotels = [
        {
            id: 'hotel1',
            name: 'Hotel One',
            roomTypes: [
                {
                    code: 'single',
                    description: 'Single Room',
                    amenities: [],
                    features: [],
                },
                {
                    code: 'double',
                    description: 'Double Room',
                    amenities: [],
                    features: [],
                },
            ],
            rooms: [
                { roomType: 'single', roomId: '101' },
                { roomType: 'single', roomId: '102' },
                { roomType: 'double', roomId: '201' },
            ],
        },
    ]

    const bookings = [
        {
            hotelId: 'hotel1',
            roomType: 'single',
            arrival: '20231201',
            departure: '20231205',
            roomRate: '100',
        },
        {
            hotelId: 'hotel1',
            roomType: 'single',
            arrival: '20231203',
            departure: '20231207',
            roomRate: '100',
        },
        {
            hotelId: 'hotel1',
            roomType: 'single',
            arrival: '20231204',
            departure: '20231206',
            roomRate: '100',
        },
    ]

    it('returns correct availability for a room type within a given date range', () => {
        const result = calculateAvailability(
            'hotel1',
            'single',
            '20231202',
            '20231206',
            hotels,
            bookings,
        )
        expect(result).toBe(-1)
    })

    it('returns correct availability when no rooms are taken', () => {
        const result = calculateAvailability(
            'hotel1',
            'double',
            '20231210',
            '20231215',
            hotels,
            bookings,
        )
        expect(result).toBe(1)
    })

    it('throws an error if the hotel does not exist', () => {
        expect(() =>
            calculateAvailability(
                'nonexistent',
                'single',
                '20231201',
                '20231205',
                hotels,
                bookings,
            ),
        ).toThrow('There is no hotel with nonexistent id!')
    })

    it('throws an error if the room type does not exist in the hotel', () => {
        expect(() =>
            calculateAvailability(
                'hotel1',
                'suite',
                '20231201',
                '20231205',
                hotels,
                bookings,
            ),
        ).toThrow(
            'There is no any suite room in hotel with [object Object] id!',
        )
    })
})
