describe('APP', () => {
  beforeEach(() => {
    cy.visit('https://virtual-assistent-frontend.herokuapp.com/');
    // cy.visit('http://localhost:3000');
    cy.once('uncaught:exception', () => false);
  });

  it('should login, see admin painel and logout', () => {
    cy.get('#login-button').click();
    cy.get('#email').should('have.length', 1);
    cy.get('#email').click();
    cy.get('#email').type('admin@ufba.br').should('have.value', 'admin@ufba.br');
    cy.get('#password').type('admin1');
    cy.get('#submitt-button').click();
    cy.get('#logout-button').should('have.length', 1);
    cy.get('#admin-content').should('have.length', 1);
    cy.get('.questions-container').should('have.length', 1);
    cy.get('.filter-question-button').should('have.length', 3);
    cy.get('#logout-button').click();
    cy.get('#email').should('have.length', 1);
  });

  //TODO: Finish test when feature is implemented
  // it('should reset password', () => {
  //   cy.get('#login-button').click();
  //   cy.get('#email').should('have.length', 1);
  //   cy.get('#request-password__button').click();
  // });
});
