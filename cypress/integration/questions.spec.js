describe('APP', () => {
  beforeEach(() => {
    cy.visit('https://virtual-assistent-frontend.herokuapp.com/');
    // cy.visit('http://localhost:3000');
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

  it('should filter questions by category', () => {
    cy.get('#admin-content').should('have.length', 1);
    cy.get('.filter-question-button').should('have.length', 3);
    cy.get('.filter-question-button').first().click();
    cy.get('h3').should('have.text', ' Perguntas categoria Institucional');
    cy.get('.add-category-button').should('have.length', 1);
    cy.contains('div', 'Site do Instituto de Computação da UFBA').should(
      'have.length',
      1,
    );
  });

  // data-testid="submit-button"
  it('should add, edit and remove question', () => {
    cy.get('#admin-content').should('have.length', 1);
    cy.get('.filter-question-button').should('have.length', 3);
    cy.get('.filter-question-button').first().click();
    cy.get('h3').should('have.text', ' Perguntas categoria Institucional');
    cy.get('[data-testid=add-question-button]').click();
    cy.get('#input-question').type('a question test');
    cy.get('#input-answer').type('answer test');
    cy.get('[data-testid=submit-button]').click();
    cy.contains('div', 'Pergunta adicionada com sucesso').should('have.length', 1);
    cy.get('.MuiDataGrid-columnHeader--sortable').first().click();
    cy.wait(2000);
    cy.get('[data-testid=edit-button]').first().click();
    cy.get('#input-question').type(' edited');
    cy.get('[data-testid=submit-button]').click();
    cy.contains('div', 'Pergunta editada com sucesso').should('have.length', 1);
    cy.get('.MuiDataGrid-columnHeader--sortable').first().click();
    cy.wait(2000);
    cy.contains('div', 'a question test edited').should('have.length', 1);
    cy.get('[data-testid=delete-button]').first().click();
    cy.get('[data-testid=confirm-button]').last().click();
    cy.contains('div', 'Pergunta excluída com sucesso').should('have.length', 1);
    cy.wait(2000);
  });
});
