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
    cy.get('[data-cy=tosCheck]')
      .click()
      .should('be.checked');
  })
})

describe('Form submission', function() {
  it('can be submitted', function() {
    cy.visit("index.html");
    cy.get('[data-cy=name]')
      .type("Naruto Uzumaki");

    cy.get('[data-cy=email]')
      .type("hokage@konoha.gov");

    cy.get('[data-cy=password]')
      .type("ajopjkapkaph");

    cy.get('[data-cy=tosCheck]')
      .click();

    cy.get('[data-cy=submit]')
      .click();

    cy.contains('Name: Naruto Uzumaki')
      .should('exist');

    cy.contains('ID:')
      .should('exist');
  })
})

describe('Empty submission', function() {
  it("can't submit form if inputs are empty", function() {
    cy.visit("index.html");
    
    cy.get('[data-cy=name]')
      .should("have.value" , "");

    cy.get('[data-cy=email]')
      .should("have.value" , "");

    cy.get('[data-cy=password]')
      .should("have.value" , "");

    cy.get('[data-cy=tosCheck]')
      .should("not.be.checked");

    cy.get('[data-cy=submit]')
      .should("be.disabled");
  })
})

describe('Invalid email', function() {
  it("can't submit form if email is invalid", function() {
    cy.visit("index.html");
    
    cy.get('[data-cy=name]')
      .type('Naruto Uzumaki');

    cy.get('[data-cy=email]')
      .type('naruto');

    cy.get('[data-cy=password]')
      .type("jajpgajwporgjpoajg");

    cy.get('[data-cy=tosCheck]')
      .click();

    cy.get('[data-cy=submit]')
      .should("be.disabled");

    cy.get(".errors")
      .contains("valid email");
  })
})