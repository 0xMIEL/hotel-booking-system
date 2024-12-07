import readline from 'node:readline/promises'
import handleUserCommand from './core/handleUserCommand.js'
import initializeOptions from './core/initializeOptions.js'
import loadData from './core/loadData.js'
import handleError from './helpers/handleError.js'

async function main() {
    try {
        const options = await initializeOptions()
        const { hotels, bookings } = await loadData(options)

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '\x1b[1mEnter command (blank line to exit): \x1b[0m',
        })

        rl.prompt()

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
