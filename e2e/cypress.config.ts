import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1440,
  viewportHeight: 1150,

  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    }
  }
});
