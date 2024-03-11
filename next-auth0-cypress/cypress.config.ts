import { defineConfig } from "cypress";
// Populate process.env with values from .env file
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    experimentalRunAllSpecs: true,
  },
  env: {
    auth0_username: "test@test.com",
    auth0_password: "Test123.",
    auth0_domain: process.env.AUTH0_ISSUER_BASE_URL,
    auth0_audience: process.env.AUTH0_AUDIENCE,
    //auth0_scope: process.env.AUTH0_SCOPE,
    auth0_client_id: process.env.AUTH0_CLIENT_ID,
    auth0_client_secret: process.env.AUTH0_CLIENT_SECRET,
    default_org_id: process.env.DEFAULT_ORG_ID,
  },
})