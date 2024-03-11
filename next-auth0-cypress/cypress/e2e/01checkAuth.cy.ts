
describe("Auth", function () {
  // use function() {} instead of () => {} to allow this binding
  it("check login", function () {
    cy.loginToAuth0(
      Cypress.env("auth0_username"),
      Cypress.env("auth0_password")
    );
  });


});

// Prevent TypeScript from reading file as legacy script
export {};
