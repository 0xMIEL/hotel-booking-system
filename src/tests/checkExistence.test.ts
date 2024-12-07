import checkExistence from '../helpers/checkExistence'

describe('checkExistence', () => {
    it('does not throw an error when all options exist', () => {
        const options = { option1: 'value1', option2: 'value2' }
        const optsToCheck = ['option1', 'option2']

        expect(() => checkExistence(options, optsToCheck)).not.toThrow()
    })

    it('throws a ReferenceError when an option is missing', () => {
        const options = { option1: 'value1' }
        const optsToCheck = ['option1', 'option2']

        expect(() => checkExistence(options, optsToCheck)).toThrow(
            ReferenceError,
        )
        expect(() => checkExistence(options, optsToCheck)).toThrow(
            "Option option2 hasn't been given!",
        )
    })

    it('does not throw an error when no options need checking', () => {
        const options = { option1: 'value1', option2: 'value2' }
        const optsToCheck = []

        expect(() => checkExistence(options, optsToCheck)).not.toThrow()
    })

    it('throws a ReferenceError for undefined options object', () => {
        const options = {}
        const optsToCheck = ['option1']

        expect(() => checkExistence(options, optsToCheck)).toThrow(
            ReferenceError,
        )
        expect(() => checkExistence(options, optsToCheck)).toThrow(
            "Option option1 hasn't been given!",
        )
    })
})
