import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'src/**/*.spec.{js,jsx,ts,tsx}',
    screenshotOnRunFailure: false,
  },
})
