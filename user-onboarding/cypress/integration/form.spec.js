/// <reference types="cypress" />

describe('Name entry', function () {
  it('can be typed into', function() {
    cy.visit("index.html");
    cy.get('[data-cy=name]')
      .type("Naruto Uzumaki")
      .should("have.value", "Naruto Uzumaki");
  })
})