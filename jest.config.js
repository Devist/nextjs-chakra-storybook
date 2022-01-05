module.exports = {
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'ts-jest'
  },
  testRegex: '\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  globals: {
    'ts-jest': {
      diagnostics: true
    }
  },
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@core-business/(.*)$': '<rootDir>/src/@core-business/$1',
    '@core/(.*)$': '<rootDir>/src/@core/$1',
    '@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1'
  }
}
