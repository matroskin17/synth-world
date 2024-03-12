const { defineConfig } = require("cypress");
const defaultConfig = require('./cypress/support/helpmates/defaultConfig')

module.exports = defineConfig({
  projectId: 'do7k2s',
  watchForFileChanges: false,
  ...defaultConfig.macbook,
  ...defaultConfig.timeouts,
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    ...defaultConfig.stageUrl,
    setupNodeEvents(on, config) {
      console.log('Config')
    },
  },
});
