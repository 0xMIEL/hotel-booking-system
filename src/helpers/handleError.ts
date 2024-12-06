const handleError = (error: unknown): void | never => {
    if (error instanceof Error) {
        console.error(
            '\n\x1b[41m\x1b[1m\x1b[97m Error occurred: \x1b[0m ',
            `\x1b[91m${error.message}\x1b[0m\n`,
        )
    }
}

export default handleError
