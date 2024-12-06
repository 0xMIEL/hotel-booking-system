import type { ExtractedArguments } from './extractArguments.js'

const checkExistence = (
    options: ExtractedArguments,
    optsToCheck: string[],
): void | never => {
    optsToCheck.forEach(opt => {
        if (options[opt] === undefined)
            throw new ReferenceError(`Option ${opt} hasn't been given!`)
    })
}

export default checkExistence
