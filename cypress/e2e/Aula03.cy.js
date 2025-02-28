describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('Selecionar um produto pelo texto', () => {
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })

    it('Selecionar um produto pelo value', () => {
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    })

    
    it('Selecionar um produto pelo índice', () => {
        cy.get('#product').select(2).should('have.value', 'cursos')
    })
})
