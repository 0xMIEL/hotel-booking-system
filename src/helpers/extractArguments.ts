export type ExtractedArguments = Record<string, string>

const extractArguments = (
    argsArr: string[],
    searchTerms: string[],
): ExtractedArguments => {
    const extractedArguments: ExtractedArguments = {}

    if (argsArr.length === 0)
        throw new ReferenceError('There is no any argument given!')

    for (let i = 0; i < argsArr.length; i++) {
        const arg = argsArr[i]

        if (searchTerms.includes(arg)) {
            if (argsArr[++i] === undefined)
                throw new TypeError(
                    'There is no specified value for last option!',
                )

            extractedArguments[arg] = argsArr[i]
        } else throw new TypeError(`Wrong sequence of arguments!`)
    }

    return extractedArguments
}

export default extractArguments
