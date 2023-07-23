import type { Config } from 'jest'
import { defaults } from 'jest-config'

const config: Config = {
  clearMocks: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'd.ts'],
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.test.ts'],
}

export default config
