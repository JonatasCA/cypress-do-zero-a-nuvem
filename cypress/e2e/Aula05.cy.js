describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('Marcar ambos checkbos e desmarcar apenas o último', () => {
        cy.get('input[type="checkbox"]').check().should('be.checked').last().uncheck().should('not.be.checked')
        //cy.get('#phone-checkbox').uncheck().should('not.be.checked')
    })
})
