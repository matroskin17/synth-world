describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://example.cypress.io')

    // cy.visit('/')

    cy.visit('/', {
      auth: {
        username: 'test',
        password: 'test',
      },
    })
    cy.get('.login-header__button').click()
    cy.get('.login__button--google').click()
  })
})
