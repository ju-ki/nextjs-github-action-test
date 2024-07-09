module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': ['babel-jest', {
            presets: ['next/babel']
        }],
    },
    globals: {
        'ts-jest': {
            tsconfig: {
                jsx: 'react-jsx',
            },
        },
    },
};