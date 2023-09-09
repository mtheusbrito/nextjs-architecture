import type { Config } from "@jest/types";
import path from "path";
const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  verbose: false,
  setupFilesAfterEnv: [
    path.resolve(__dirname, 'src', 'setupTests.js'),
  ],
  transform: {
    "\\.[jt]sx?$": ["babel-jest",{
      configFile: path.resolve(__dirname, '.babelrc')
    }],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
export default config;
