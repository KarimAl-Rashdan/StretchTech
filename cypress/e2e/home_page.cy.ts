describe('Home Page', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon', {fixture: 'example.json'})

    cy.visit('http://localhost:3000/')
  })

  it('passes', () => {

  })
})