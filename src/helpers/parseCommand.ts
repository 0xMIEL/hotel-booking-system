const parseCommand = (command: string) => {
    const match = command.match(
        /^Availability\((.+?),\s*(\d+)(?:-(\d+))?,\s*(\w+)\)$/,
    )
    if (!match) {
        throw new TypeError(
            'Invalid command. Example: Availability(H1, 20240901, SGL)!',
        )
    }
    const [, hotelId, startDate, endDate, roomType] = match

    return { hotelId, startDate, endDate: endDate || startDate, roomType }
}

export default parseCommand
