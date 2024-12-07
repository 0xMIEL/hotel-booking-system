import checkExistence from '../helpers/checkExistence.js'
import extractArguments from '../helpers/extractArguments.js'

const initializeOptions = () => {
    const args = process.argv.slice(2)
    const requiredOptions = ['--hotels', '--bookings']
    const options = extractArguments(args, requiredOptions)
    checkExistence(options, requiredOptions)
    return options
}

export default initializeOptions
