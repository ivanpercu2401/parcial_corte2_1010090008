import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:9000/shopping-car/swagger-ui/index.html#/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

