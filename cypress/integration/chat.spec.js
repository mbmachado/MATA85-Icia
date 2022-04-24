describe('APP', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.once('uncaught:exception', () => false);
    cy.intercept('GET', '/api/v1/topics', { fixture: 'questions.json' });
    cy.intercept('GET', '/api/v1/topics/1', { fixture: 'qid1.json' });
    cy.intercept('GET', '/api/v1/topics/27', { fixture: 'qid27.json' });
    cy.intercept('GET', '/api/v1/topics/32', { fixture: 'qid32.json' });
  });

  it("should check 'Institucional' fluxo and see answer", () => {
    cy.get('.chat-items').should('have.length', 1);
    cy.get('.chat-item-option').should('have.length', 3);
    cy.get('button[title=Institucional]').click();
    cy.get('button[title="Pessoas"]').should('have.length', 1);
    cy.get('button[title="Ensino"]').should('have.length', 1);
    cy.get('button[title="Site do Instituto de Computação da UFBA"]').click();
    cy.get('a.text-white').should('have.text', 'https://computacao.ufba.br/');
  });

  it("should check 'Pessoas' fluxo", () => {
    cy.get('.chat-items').should('have.length', 1);
    cy.get('.chat-item-option').should('have.length', 3);
    cy.get('button[title=Pessoas]').click();
    cy.get('button[title="Aposentados e Colaboradores"]').should('have.length', 1);
    cy.get('button[title="Docentes"]').should('have.length', 1);
  });

  it("should check 'Extensao' fluxo", () => {
    cy.get('.chat-items').should('have.length', 1);
    cy.get('.chat-item-option').should('have.length', 3);
    cy.get('button[title=Extensão]').click();
    cy.get('button[title="Programas de extensão"]').should('have.length', 1);
    cy.get('button[title="Residência de Software"]').should('have.length', 1);
  });
});
