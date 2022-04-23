describe('APP', () => {
  it('should logout', () => {
    cy.visit('http://localhost:3000');
    cy.get('#logout-button').click();
    cy.get('#email').should('have.length', 1);
  });
});
