describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('Selecionar o tipo de atendimento "Feedback"', () => {
        cy.get('input[type="radio"][value="feedback"]').check('feedback').should('be.checked')

        cy.get('#firstName').type('Ana').should('have.value', 'Ana')
        cy.get('#lastName').type('Beatriz').should('have.value', 'Beatriz')
        cy.get('#email').type('anabeatriz@email.com').should('have.value', 'anabeatriz@email.com')
        cy.get('#open-text-area').type('Texto').should('have.value', 'Texto') //Valor da variável
        //cy.get('.button[type="submit"]').click()
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('Selecionar o tipo de atendimento "Elogia"', () => {
        cy.get('input[type="radio"]')
            .each(typeOfService => {
                cy.wrap(typeOfService)
                    .check()
                    .should('be.checked')
            })
    })

})
