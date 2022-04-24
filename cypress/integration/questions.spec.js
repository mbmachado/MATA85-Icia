describe('APP', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.once('uncaught:exception', () => false);
  });

  it('should filter questions', () => {
    cy.get('#login-button').click();
    cy.get('#email').should('have.length', 1);
    cy.get('#email').click();
    cy.get('#email').type('admin@ufba.br').should('have.value', 'admin@ufba.br');
    cy.get('#password').type('admin1');
    cy.get('#submitt-button').click();
    cy.get('#admin-content').should('have.length', 1);
    cy.get('.filter-question-button').should('have.length', 3);
    cy.get('.filter-question-button').first().click();
    cy.get('h3').should('have.text', ' Perguntas categoria Institucional');
    cy.get('#add-category-button').should('have.length', 3);
  });
});
