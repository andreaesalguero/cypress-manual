const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout:12000,
    chromeWebSecurity:false,
    "compilerOptions": {
      "types": ["cypress", "cypress-plugin-stripe-elements"]
    }
  },
});

