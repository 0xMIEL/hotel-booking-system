import extractArguments from './extractArguments.ts'

describe('extractArguments', () => {
    it('should extract correct arguments based on search terms', () => {
        const argsArr = ['--name', 'John', '--age', '30', '--city', 'New York']
        const searchTerms = ['--name', '--age', '--city']

        const result = extractArguments(argsArr, searchTerms)

        expect(result).toEqual({
            '--age': '30',
            '--city': 'New York',
            '--name': 'John',
        })
    })

    it('should throw an error if a specified argument has no value', () => {
        const argsArr = ['--name', 'John', '--age']
        const searchTerms = ['--name', '--age']

        expect(() => extractArguments(argsArr, searchTerms)).toThrow(
            'There is no specified value for last option!',
        )
    })

    it('should throw an error if an invalid argument is passed', () => {
        const argsArr = ['--name', 'John', '--invalidOption', 'value']
        const searchTerms = ['--name', '--age']

        expect(() => extractArguments(argsArr, searchTerms)).toThrow(
            'Wrong option "--invalidOption"!',
        )
    })

    it('should handle an empty input array', () => {
        const argsArr: string[] = []
        const searchTerms = ['--name', '--age']

        expect(() => extractArguments(argsArr, searchTerms)).toThrow(
            'There is no any argument given!',
        )
    })

    it('should handle when no search terms match', () => {
        const argsArr = ['--color', 'blue', '--size', 'M']
        const searchTerms = ['--name', '--age']

        expect(() => extractArguments(argsArr, searchTerms)).toThrow(
            'Wrong option "--color"!',
        )
    })
})
