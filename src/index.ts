import readline from 'node:readline/promises'
import calculateAvailability from './helpers/calculateAvailability.js'
import checkExistence from './helpers/checkExistence.js'
import extractArguments from './helpers/extractArguments.js'
import handleError from './helpers/handleError.js'
import loadJSONData from './helpers/loadJSONData.js'
import type { Reservation } from './types/bookingTypes.js'
import type { Hotel } from './types/hotelTypes.js'

async function initializeOptions() {
    const args = process.argv.slice(2)
    const requiredOptions = ['--hotels', '--bookings']
    const options = extractArguments(args, requiredOptions)
    checkExistence(options, requiredOptions)
    return options
}

async function loadData(options: Record<string, string>) {
    const hotels = await loadJSONData<Hotel[]>(options['--hotels'])
    const bookings = await loadJSONData<Reservation[]>(options['--bookings'])
    return { hotels, bookings }
}

function createReadlineInterface() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '\x1b[1mEnter command (blank line to exit): \x1b[0m',
    })
    rl.prompt()
    return rl
}

function parseCommand(command: string) {
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

function handleUserCommand(
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
        `${command}: ${availCount > 1 ? '\x1b[31m' : '\x1b[32m'}${availCount}\x1b[0m`,
    )
}

async function main() {
    try {
        const options = await initializeOptions()
        const { hotels, bookings } = await loadData(options)
        const rl = createReadlineInterface()

        rl.on('line', line => {
            if (!line.trim()) {
                rl.close()
                return
            }
            try {
                handleUserCommand(line.trim(), hotels, bookings)
            } catch (error) {
                handleError(error)
            } finally {
                rl.prompt()
            }
        })
    } catch (error) {
        handleError(error)
    }
}

main()
