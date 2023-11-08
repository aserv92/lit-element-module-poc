/// <reference types="Cypress" />

import Chainable = Cypress.Chainable;

describe('The STDcheck header', () => {
  beforeEach(() => {
    cy.visit('/demo/');
  });

  function getLitElement(elementName): Chainable {
    return cy.get(elementName).shadow();
  }

  it('should have the site name in the header', () => {
    getLitElement('stdcheck-header').find('h2').should('have.text', 'STDCheck Header');
  });
});
