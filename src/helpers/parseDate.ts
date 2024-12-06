const parseDate = (unparsedDate: string): Date => {
    if (unparsedDate.length !== 8)
        throw new RangeError('Date format must be in YYYYMMDD!')

    const year = parseInt(unparsedDate.substring(0, 4))

    if (year < 2000 || year > 3000)
        throw new RangeError('Year must be between 2000 and 3000')

    const month = parseInt(unparsedDate.substring(4, 6)) - 1

    if (month < 0 || month > 11)
        throw new RangeError('Month must be between 1 and 12!')

    const day = parseInt(unparsedDate.substring(6, 8))

    if (day <= 0)
        throw new RangeError('Day must be a positive non-zero number!')

    if ([0, 2, 4, 6, 7, 9, 11].includes(month) && day > 31)
        throw new RangeError(`Month ${month + 1} has 31 days!`)
    else if ([3, 5, 8, 10].includes(month) && day > 30)
        throw new RangeError(`Month ${month + 1} has 30 days!`)
    else if (month === 1) {
        const isLeapYear =
            (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

        if (isLeapYear && day > 29)
            throw new RangeError(`In ${year} February has 29 days!`)
        else if (!isLeapYear && day > 28)
            throw new RangeError(`In ${year} February has 28 days!`)
    }

    return new Date(year, month, day)
}

export default parseDate
