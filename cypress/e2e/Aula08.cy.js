describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    Cypress._.times(3, () => {
        it('Marcar ambos checkbos e desmarcar apenas o último', () => {
            cy.get('input[type="checkbox"]').check().should('be.checked').last().uncheck().should('not.be.checked')
            //cy.get('#phone-checkbox').uncheck().should('not.be.checked')
        }) 
    })

    it("Exibir e ocultar mensagens de erro e sucesso utilizando o .invoke()", () => {
            cy.get('.success')
              .should('not.be.visible')
              .invoke('show')
              .should('be.visible')
              .and('contain', 'Mensagem enviada com sucesso.')
              .invoke('hide')
              .should('not.be.visible')
            cy.get('.error')
              .should('not.be.visible')
              .invoke('show')
              .should('be.visible')
              .and('contain', 'Valide os campos obrigatórios!')
              .invoke('hide')
              .should('not.be.visible')
    })

    it('Preencher campo de texto utilizando o .invoke()', () => {
        cy.get('#open-text-area').invoke('val', 'Texto aleatório').should('have.value', 'Texto aleatório')
    })
    
    it('Testando requisição via API', () => {
        cy.request('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html').as('getRequest').its('status').should('be.equal', 200)
        cy.get('@getRequest').its('statusText').should('be.equal', 'OK')
        cy.get('@getRequest').its('body').should('include', 'CAC TAT')
    })

    it("Exibir o gato", () => {
        cy.get('#cat')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', '🐈')
          .invoke('hide')
          .should('not.be.visible')
    })

    it("Alterar o texto com .invoke()", () => {
        cy.get('#title').invoke('text', 'CAT TAT')
        cy.get('#subtitle').invoke('text', 'Cat talking about text')
    } )
})
