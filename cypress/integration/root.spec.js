/// <reference types="cypress" />

describe('App', () => {
  it('Visits the app root h1', () => {
    cy.visit('http://localhost:8000/');
    cy.contains('h1', 'Page index');
  });
});
