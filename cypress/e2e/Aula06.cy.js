describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('Selecionar arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json').should(input => {
            console.log(input[0].files[0].name)
            expect(input[0].files[0].name).to.equal('example.json')
        })
    })

    it('Selecionar arquivo da pasta fixtures simulando um drag-and-drop ', () => {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json', {action: 'drag-drop'}).should(input => {
            expect(input[0].files[0].name).to.equal('example.json')
        })
    }
)
    it('Selecionar arquivo da pasta fixtures utilizando o alias ', () => {
        cy.fixture('example.json').as('myExample')
        cy.get('input[type="file"]').selectFile('@myExample').should(input => {
            expect(input[0].files[0].name).to.equal('example.json')
        })
    })
    
})
