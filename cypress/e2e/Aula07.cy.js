describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('Verificar que a política de privacidade abre em uma nova guia', () => {
        cy.contains('a', 'Política de Privacidade').should('have.attr', 'href', 'privacy.html').and('have.attr', 'target', '_blank')
    })

    it('Verificar que a política de privacidade abre em uma nova guia forma alternativo', () => {
        cy.contains('a', 'Política de Privacidade').invoke('removeAttr', 'target').click()

        cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
    })
    
})
