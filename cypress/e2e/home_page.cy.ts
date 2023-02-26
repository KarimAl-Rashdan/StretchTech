describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/', {
      statusCode: 200,
    }).as('getPokemon')

    cy.visit('http://localhost:3000/')

    // cy.wait('@getPokemon')

  })

  // I am currently able to stub the data but I'm not entirely sure it is set up properly. All tests are passing on my end as of now. -Derek

  it('should have a navigation bar with a background', () => {

    cy.get('header')
      .should('have.css', 'background-image')
      .and('include', "http://localhost:3000/static/media/banner.52733dc59b8d8581eda9.png")
  })

  it('should have a title and logo', () => {

    cy.get('.navBar>h1')
      .contains("Gotta Catch 'Em All")
      .should('be.visible')

    cy.get('.logo')
      .should('have.attr', 'src', '/static/media/logo.875b36d1169a205a1b19.png')
  })

  it('should have a search bar and search button', () => {

    cy.get('Form')
      .get('input[type="text"]')
      .get('input[placeholder="Search..."]')
      .type('charmander')
      .should('have.value', 'charmander')

    cy.get('form')
      .get('button')
  })

  it('should direct you to the pokemon details page when inputting a pokemon name and clicking submit', () => {

    cy.get('form>input')
      .type('charmander')

    cy.get('button')
      .click()

    cy.url().should('eq', 'http://localhost:3000/charmander')
  })

  it.skip('should not direct you to the pokemon page if the pokemon is spelled incorrectly', () => {
    cy.get('form>input')
      .type('chatmander')

    cy.get('button')
      .click()

    cy.url().should('eq', 'http://localhost:3000/')
      .and('not.eq', 'http://localhost:3000/chatmander')
  })

  it('should have 5 pokemon images with their names displayed', () => {

    // cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5').as('getFive')

    // cy.wait("@getFive")

    cy.get('.card>img')
      .should('have.length', 5)
      .and('be.visible')
      .first()
      .next()
      .should('contain', 'bulbasaur')

    cy.get('.card-info>p')
      .should('have.length', 5)
      .and('be.visible')
  })

  it('should direct you to the pokemon details page when clicking on the images', () => {

    // cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5').as('getFive')

    // cy.wait("@getFive")

    cy.get('.card>img')
      .first().click()
      .url().should('eq', 'http://localhost:3000/bulbasaur')

  })

  it('should direct you to the pokemon details page when clicking on another pokemon image', () => {

    // cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5').as('getFive')

    // cy.wait("@getFive")

    cy.get('.card')
      .eq(1).click()
      .url().should('eq', 'http://localhost:3000/ivysaur')

  })

})