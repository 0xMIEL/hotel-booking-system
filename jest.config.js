export default {
    transform: {
        '\\.[jt]s?$': '@swc/jest',
    },
    moduleNameMapper: {
        '(.+)\\.js': '$1',
    },
}
