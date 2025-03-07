describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('Verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preencha os campos obrigatórios e realize o envio do formulário', () => {
    cy.clock()
    const longText = Cypress._.repeat('Texto extenso', 30) // Criando uma variável para armazenar um texto extenso utilizando biblioteca _.repeat

    cy.get('#firstName').type('Ana').should('have.value', 'Ana')
    cy.get('#lastName').type('Beatriz').should('have.value', 'Beatriz')
    cy.get('#email').type('anabeatriz@email.com').should('have.value', 'anabeatriz@email.com')
    cy.get('#open-text-area').type(longText, {delay: 0}).should('have.value', longText) //Valor da variável
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  })

  it('Validação do fomulário de e-mail', () => {
    cy.clock()
    cy.get('#firstName').type('Ana').should('have.value', 'Ana')
    cy.get('#lastName').type('Beatriz').should('have.value', 'Beatriz')
    cy.get('#email').type('anabeatriz').should('have.value', 'anabeatriz')
    cy.get('#open-text-area').type("Um texto aleatório").should('have.value',"Um texto aleatório")
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
    cy.tick(3000)
    cy.get('.error').should('not.be.visible')
  })

  it('Campo telefone permanece vazio quando informado um valor não numérico', () => {
    cy.get('#phone')
      .type("abc")
        .should('have.value', '')
  })

  it('Erro ao não preencher campo telefone quando o mesmo se torna obrigatório', () => {
    cy.clock()
    cy.get('#firstName').type('Ana').should('have.value', 'Ana')
    cy.get('#lastName').type('Beatriz').should('have.value', 'Beatriz')
    cy.get('#email').type('anabeatriz@email.com').should('have.value', 'anabeatriz@email.com')
    cy.get('#phone-checkbox[type="checkbox"]').check()
    cy.get('#open-text-area').type("Um texto aleatório").should('have.value',"Um texto aleatório")
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
    cy.tick(3000)
    cy.get('.error').should('not.be.visible')
  })

  it('Validar limpeza de campos', () => {
    cy.get('#firstName').type('Ana').should('have.value', 'Ana').clear()
    cy.get('#lastName').type('Beatriz').should('have.value', 'Beatriz').clear()
    cy.get('#email').type('anabeatriz@email.com').should('have.value', 'anabeatriz@email.com').clear()
    cy.get('#open-text-area').type("Um texto aleatório").should('have.value',"Um texto aleatório").clear()

    cy.get('#firstName, #lastName, #email, #open-text-area').should('have.value', '')
  })

  it('Validar mensamge de erro ao não preencher campos obrigatórios', () => {
    cy.clock()
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
    cy.tick(3000)
    cy.get('.error').should('not.be.visible')
  })

  it('Enviar com sucesso o formulário utilizando comandos customizados', () => {
    cy.clock()
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  })

  it('Enviar com sucesso o formulário utilizando comandos customizados - Com argumentos', () => {
    cy.clock()
    const data = {
      firstName: 'Jonatas',
      lastName: 'Ciscati',
      email: 'jonatas@ciscati.com',
      text: 'Texto teste'
    }
    cy.fillMandatoryFieldsAndSubmitArguments(data)

    cy.get('.success').should('be.visible')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  })

  it('Enviar com sucesso o formulário utilizando comandos customizados - Com argumentos', () => {
    cy.clock()
    // const data = {
    //   firstName: 'Jonatas',
    //   lastName: 'Ciscati',
    //   email: 'jonatas@ciscati.com',
    //   text: 'Texto teste'
    // }
    cy.fillMandatoryFieldsAndSubmitArgumentsDefault()

    cy.get('.success').should('be.visible')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  })

})
