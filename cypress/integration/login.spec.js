describe('APP', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.once('uncaught:exception', () => false);
  });

  // verificar encriptação de email e senha antes de mandar pra CI

  it('should login, see admin painel and logout', () => {
    cy.get('#login-button').click();
    cy.get('#email').should('have.length', 1);
    cy.get('#email').click();
    cy.get('#email').type('admin@ufba.br').should('have.value', 'admin@ufba.br');
    cy.get('#password').type('admin1');
    cy.get('#submitt-button').click();
    cy.get('#logout-button').should('have.length', 1);
    cy.get('#admin-content').should('have.length', 1);
    cy.get('#logout-button').click();
    cy.get('#email').should('have.length', 1);
  });

  it('should reset password', () => {
    cy.get('#login-button').click();
    cy.get('#email').should('have.length', 1);
    cy.get('#request-password__button').click();
  });
});
