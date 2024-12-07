import parseDate from '../helpers/parseDate'

describe('function: parseDate', () => {
    test('correct date format, valid date', () => {
        const unparsedDate = '20241206'
        const date = parseDate(unparsedDate)
        expect(date).toEqual(new Date(2024, 11, 6))
    })

    test('correct date format, leap year, February 29', () => {
        const unparsedDate = '20240229'
        const date = parseDate(unparsedDate)
        expect(date).toEqual(new Date(2024, 1, 29))
    })

    test('correct date format, non-leap year, February 28', () => {
        const unparsedDate = '20240228'
        const date = parseDate(unparsedDate)
        expect(date).toEqual(new Date(2024, 1, 28))
    })

    test('correct date format, first day of month', () => {
        const unparsedDate = '20240101'
        const date = parseDate(unparsedDate)
        expect(date).toEqual(new Date(2024, 0, 1))
    })

    test('date format not 8 characters long', () => {
        const unparsedDate = '2024126'
        expect(() => parseDate(unparsedDate)).toThrow(
            'Date format must be in YYYYMMDD!',
        )
    })

    test('year out of range (before 2000)', () => {
        const unparsedDate = '19991231'
        expect(() => parseDate(unparsedDate)).toThrow(
            'Year must be between 2000 and 3000!',
        )
    })

    test('month out of range (0)', () => {
        const unparsedDate = '20241301'
        expect(() => parseDate(unparsedDate)).toThrow(
            'Month must be between 1 and 12!',
        )
    })

    test('month out of range (13)', () => {
        const unparsedDate = '20240000'
        expect(() => parseDate(unparsedDate)).toThrow(
            'Month must be between 1 and 12!',
        )
    })

    test('invalid day (zero)', () => {
        const unparsedDate = '20240200'
        expect(() => parseDate(unparsedDate)).toThrow(
            'Day must be a positive non-zero number!',
        )
    })

    test('invalid day (negative)', () => {
        const unparsedDate = '202402-05'
        expect(() => parseDate(unparsedDate)).toThrow(
            'Date format must be in YYYYMMDD!',
        )
    })

    test('month with 31 days, invalid day (32)', () => {
        const unparsedDate = '20240132'
        expect(() => parseDate(unparsedDate)).toThrow('Month 1 has 31 days!')
    })

    test('month with 30 days, invalid day (31)', () => {
        const unparsedDate = '20240431'
        expect(() => parseDate(unparsedDate)).toThrow('Month 4 has 30 days!')
    })

    test('February 29th on non-leap year', () => {
        const unparsedDate = '20230229'
        expect(() => parseDate(unparsedDate)).toThrow(
            'In 2023 February has 28 days!',
        )
    })

    test('February 30th invalid day', () => {
        const unparsedDate = '20230230'
        expect(() => parseDate(unparsedDate)).toThrow(
            'In 2023 February has 28 days!',
        )
    })

    test('February 29th on leap year (correct)', () => {
        const unparsedDate = '20240229'
        const date = parseDate(unparsedDate)
        expect(date).toEqual(new Date(2024, 1, 29))
    })

    test('invalid date for month with 31 days', () => {
        const unparsedDate = '20241232'
        expect(() => parseDate(unparsedDate)).toThrow('Month 12 has 31 days!')
    })

    test('first valid date in range', () => {
        const unparsedDate = '20000101'
        const date = parseDate(unparsedDate)
        expect(date).toEqual(new Date(2000, 0, 1))
    })

    test('last valid date in range', () => {
        const unparsedDate = '29991231'
        const date = parseDate(unparsedDate)
        expect(date).toEqual(new Date(2999, 11, 31))
    })
})
