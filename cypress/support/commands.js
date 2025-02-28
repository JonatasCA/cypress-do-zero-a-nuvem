Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    const longText = Cypress._.repeat('Texto teste', 10) // Criando uma variável para armazenar um texto extenso utilizando biblioteca _.repeat

    cy.get('#firstName').type('Ana').should('have.value', 'Ana')
    cy.get('#lastName').type('Beatriz').should('have.value', 'Beatriz')
    cy.get('#email').type('anabeatriz@email.com').should('have.value', 'anabeatriz@email.com')
    cy.get('#open-text-area').type(longText).should('have.value', longText) //Valor da variável
    cy.get('.button[type="submit"]').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmitArguments', data => {
    cy.get('#firstName').type(data.firstName).should('have.value', data.firstName)
    cy.get('#lastName').type(data.lastName).should('have.value', data.lastName)
    cy.get('#email').type(data.email).should('have.value', data.email)
    cy.get('#open-text-area').type(data.text).should('have.value', data.text)
    cy.get('.button[type="submit"]').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmitArgumentsDefault', (data = {
    firstName: 'Arlindo',
    lastName: 'Bento',
    email: 'arlindo@bento.com',
    text: 'Teste texto'
}) => {
    cy.get('#firstName').type(data.firstName).should('have.value', data.firstName)
    cy.get('#lastName').type(data.lastName).should('have.value', data.lastName)
    cy.get('#email').type(data.email).should('have.value', data.email)
    cy.get('#open-text-area').type(data.text).should('have.value', data.text)
    cy.get('.button[type="submit"]').click()
})