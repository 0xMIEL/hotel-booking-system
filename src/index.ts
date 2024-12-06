import checkExistence from './helpers/checkExistence.js'
import extractArguments from './helpers/extractArguments.js'
import loadJSONData from './helpers/loadJSONData.js'
import type { Reservation } from './types/bookingTypes.js'
import type { Hotel } from './types/hotelTypes.js'

try {
    // slice only custom options
    const args = process.argv.slice(2)

    // desired option names
    const searchTerm = ['--hotels', '--bookings']

    // extract desired options (allArguments, desiredOptions)
    const options = extractArguments(args, searchTerm)

    // make some options required (allOptions, optionsToBeRequired)
    checkExistence(options, searchTerm)

    // load data from JSON
    const hotels = await loadJSONData<Hotel[]>(options['--hotels'])
    const bookings = await loadJSONData<Reservation[]>(options['--bookings'])

    console.log(hotels, bookings)
} catch (error) {
    if (error instanceof Error) {
        console.error(
            '\n\x1b[41m\x1b[1m\x1b[97m Error occurred: \x1b[0m ',
            `\x1b[91m${error.message}\x1b[0m\n`,
        )
    }
}
