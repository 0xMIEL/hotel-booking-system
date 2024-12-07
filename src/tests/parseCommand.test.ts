import parseCommand from '../helpers/parseCommand'

describe('parseCommand', () => {
    it('should correctly parse a valid command', () => {
        const result = parseCommand('Availability(H1, 20240901-20240910, SGL)')
        expect(result).toEqual({
            hotelId: 'H1',
            startDate: '20240901',
            endDate: '20240910',
            roomType: 'SGL',
        })
    })

    it('should parse a command with the same start and end date', () => {
        const result = parseCommand('Availability(H1, 20240901, SGL)')
        expect(result).toEqual({
            hotelId: 'H1',
            startDate: '20240901',
            endDate: '20240901',
            roomType: 'SGL',
        })
    })

    it('should throw an error for an invalid command format', () => {
        expect(() => parseCommand('InvalidCommand(H1, 20240901, SGL)')).toThrow(
            'Invalid command. Example: Availability(H1, 20240901, SGL)!',
        )
    })

    it('should throw an error for missing parameters', () => {
        expect(() => parseCommand('Availability(H1, , SGL)')).toThrow(
            'Invalid command. Example: Availability(H1, 20240901, SGL)!',
        )
    })
})
