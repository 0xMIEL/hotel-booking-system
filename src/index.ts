import readline from 'node:readline/promises'
import handleUserCommand from './core/handleUserCommand.js'
import initializeOptions from './core/initializeOptions.js'
import loadData from './core/loadData.js'
import handleError from './helpers/handleError.js'

async function main() {
    try {
        // handle command arguments
        const options = initializeOptions()

        // load files specified as arguments of some options
        const { hotels, bookings } = await loadData(options)

        // connect terminal with stdin and stdout of process
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '\n\x1b[1mEnter command (blank line to exit): \x1b[0m',
        })

        rl.prompt()

        // handle messages from terminal
        rl.on('line', line => {
            // close if blank line
            if (!line.trim()) {
                rl.close()
                return
            }

            try {
                // process command form input
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
