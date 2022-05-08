describe('APP', () => {
  beforeEach(() => {
    // cy.visit('http://localhost:3000');
    cy.visit('https://virtual-assistent-frontend.herokuapp.com/');
    cy.once('uncaught:exception', () => false);
    cy.get('#login-button').click();
    cy.wait(2000);
    cy.get('#email').should('have.length', 1);
    cy.get('#email').click();
    cy.get('#email').type('admin@ufba.br').should('have.value', 'admin@ufba.br');
    cy.get('#password').type('admin1');
    cy.get('#submitt-button').click();
    cy.wait(2000);
  });

  afterEach(() => {
    cy.wait(2000);
    cy.get('#logout-button').click();
  });

  it('should add, edit and remove user', () => {
    cy.get('#admin-content').should('have.length', 1);
    cy.get('.menu-option').last().click();
    cy.wait(2000);
    cy.get('h2').should('have.text', 'Usuários Cadastrados');
    cy.get('[data-testid=add_user-button]').click();
    cy.get('#name').type('a user test');
    cy.get('#email').type('emailtest@test.br');
    cy.get('#password').type('senhasenha');
    cy.get('[data-testid=submit-button]').first().click();
    cy.wait(2000);
    cy.get('[data-testid=user-name]').last().should('have.text', 'a user test');

    cy.get('[data-testid=edit_user-button]').last().click();
    cy.get('#name').type(' edited');
    cy.get('#password').type('senhasenha');
    cy.get('[data-testid=submit-button]').click();
    cy.wait(2000);
    cy.get('[data-testid=user-name]').last().should('have.text', 'a user test edited');

    cy.get('[data-testid=delete_user-button]').last().click();
    cy.get('[data-testid=confirm-button]').last().click();
    cy.wait(2000);
    cy.get('[data-testid=user-name]')
      .last()
      .should('not.have.text', 'a user test edited');
    cy.wait(4000);
  });
});
