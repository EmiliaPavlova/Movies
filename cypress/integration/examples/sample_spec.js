describe('My First Test', function() {
  it('Adds value in the input field', function() {
    /*
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
    */
    cy.visit('http://localhost:8080/')
    cy.get('.searchWrapper').contains('Find your movie')
    cy.get('input')
      .type('101 DALMATIANS')
      .should('have.value', '101 DALMATIANS')
  })
});
