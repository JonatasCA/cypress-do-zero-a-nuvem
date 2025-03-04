describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('src/privacy.html')
    })

    it('Verificar informações da página', () => {
        cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
        cy.contains('p', 'Talking About Testing').should('be.visible')
    })
    
})
