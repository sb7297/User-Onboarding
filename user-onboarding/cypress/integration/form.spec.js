/// <reference types="cypress" />

describe('Name entry', function () {
  it('can be typed into', function() {
    cy.visit("index.html");
    cy.get('[data-cy=name]')
      .type("Naruto Uzumaki")
      .should("have.value", "Naruto Uzumaki");
  })
});

describe('TOS Check', function() {
  it('can be checked', function() {
    cy.visit("index.html");
    cy.get('[data-cy=name]')
      .type("Naruto Uzumaki");

    cy.get('[data-cy=email]')
      .type("hokage@konoha.gov");

    cy.get('[data-cy=password]')
      .type("ajopjkapkaph");

    cy.get('[data-cy=tosCheck]')
      .click()
      .should('be.checked');
  })
})