describe('APP', () => {
  beforeEach(() => {
    // cy.visit('http://localhost:3000');
    cy.visit('https://virtual-assistent-frontend.herokuapp.com/');
    cy.once('uncaught:exception', () => false);
    // cy.intercept('GET', '/api/v1/topics', { fixture: 'questions.json' });
    // cy.intercept('GET', '/api/v1/topics/1', { fixture: 'qid1.json' });
    // cy.intercept('GET', '/api/v1/topics/27', { fixture: 'qid27.json' });
    // cy.intercept('GET', '/api/v1/topics/32', { fixture: 'qid32.json' });
  });

  it("should check 'Institucional' fluxo and see answer", () => {
    cy.get('.chat-items').should('have.length', 1);
    cy.get('.chat-item-option').should('have.length', 3);
    cy.get('button[title=Institucional]').click();
    cy.wait(1000);
    cy.get('button[title="Pessoas"]').should('have.length', 1);
    cy.get('button[title="Ensino"]').should('have.length', 1);
    cy.get('button[title="Site do Instituto de Computação da UFBA"]').click();
    cy.get('a.text-white').should('have.text', 'https://computacao.ufba.br/');
  });

  it("should check 'Pessoas' fluxo", () => {
    cy.get('.chat-items').should('have.length', 1);
    cy.get('.chat-item-option').should('have.length', 3);
    cy.get('button[title=Pessoas]').click();
    cy.wait(1000);
    cy.get('button[title="Aposentados e Colaboradores"]').should('have.length', 1);
    cy.get('button[title="Docentes"]').should('have.length', 1);
    cy.get('button[title="Docentes"]').click();
    cy.get('button[title="Docentes do IC"]').click();
    cy.get('a.text-white').should(
      'have.text',
      'https://computacao.ufba.br/pt-br/docentes',
    );
  });

  it("should check 'Extensao' fluxo", () => {
    cy.get('.chat-items').should('have.length', 1);
    cy.get('.chat-item-option').should('have.length', 3);
    cy.get('button[title=Extensão]').click();
    cy.get('button[title="Programas de extensão"]').should('have.length', 1);
    cy.get('button[title="Residência de Software"]').should('have.length', 1);
    cy.get('button[title="Programas de extensão"]').click();
    cy.get('button[title="PROFCOMP"]').should('have.length', 1);
    cy.get('button[title="Programa Onda Digital"]').should('have.length', 1);
    cy.get('button[title="Apresentação"]').click();
    cy.get('button[title="O que é extensão universitária "]').should('have.length', 1);
    cy.get('button[title="Programas de extensão do DCC"]').click();
    cy.get('h3')
      .last()
      .should(
        'have.text',
        'o DCC conta com três Programas Permanentes de Extensão que realizam atividades focadas na inclusão e letramento digital e educação em computação em apoio com a sociedade baiana. São eles: Programa Onda Digital, Programa de Ações Pedagógicas para Formação de Professores de Computação (PROFCOMP) e Maratonas de Programação (GruPro)',
      );
  });
});
