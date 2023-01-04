import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase/firebase";

describe("Sign In with e-mail and password", () => {
  it("should allow user to log in with proper e-mail and password", () => {
    auth.signOut();
    cy.visit("/sign-in");

    cy.get('[data-cy="mail-input"]').type("test@test.test");
    cy.get('[data-cy="password-input"]').type("password123");

    cy.get('[data-cy="submit-login"]').click().click(); // TODO - why do we need two clicks?

    cy.location("pathname").should("eq", "/");
  });

  it("should redirect to home page if logged in", () => {
    signInWithEmailAndPassword(auth, "test@test.test", "password123");
    cy.visit("/sign-in");

    cy.location("pathname").should("eq", "/");
  });

  it("should redirect to sign-in page from homepage if not logged in", () => {
    auth.signOut();
    cy.visit("/");

    cy.location("pathname").should("eq", "/");
  });
});
