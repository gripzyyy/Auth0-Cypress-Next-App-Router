function loginViaAuth0Ui(username: string, password: string) {
  // App landing page redirects to Auth0.
  cy.visit("/");
  // Wait a few seconds
  cy.wait(10000);
  // Go to login page
  cy.visit("/api/auth/login");
  // Login on Auth0.
  cy.origin(
    Cypress.env("auth0_domain"),
    { args: { username, password } },
    ({ username, password }) => {
      cy.get("input#username").type(username);
      cy.get("input#password").type(password, { log: false });
      cy.contains(
        "button[data-action-button-primary=true]",
        "Continue"
      ).click();
    }
  );



}

Cypress.Commands.add("loginToAuth0", (username: string, password: string) => {
  const log = Cypress.log({
    displayName: "AUTH0 LOGIN",
    message: [`🔐 Authenticating | ${username}`],
    // @ts-ignore
    autoEnd: false,
  });
  log.snapshot("before");

  // Uset to stop authentication before each test.
  cy.session(
    `auth0-${username}`,
    () => {
      loginViaAuth0Ui(username, password)
    },
    {
      validate: () => {
        // Validate presence of access token in localStorage.
        // cy.wrap(localStorage)
        //   .invoke('getItem', 'authAccessToken')
        //   .should('exist')
      },
    }
  )

  // loginViaAuth0Ui(username, password);

  log.snapshot("after");
  log.end();
});
