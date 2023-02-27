describe('Home Page', () => {
  beforeEach(() => {

    const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

    cy.intercept('GET', `${baseURL}`, {fixtures: 'examples.json'}
    ).as('getPokemon')
    cy.intercept('GET', `${baseURL}/bulbasaur`
    ).as('getFirst')
    cy.intercept('GET', `${baseURL}/ivysaur`
    ).as('getSecond')
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5'
    ).as('fetchFive')
    
    cy.visit('http://localhost:3000/')

  })

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

    cy.get('input')
      .type('charmander')
    cy.get('.card')
      .first()
      .click()

    cy.url().should('eq', 'http://localhost:3000/bulbasaur')
  })

  it('should direct you to an error page if the user types an incorrect pokemon', () => {
    cy.get('input')
      .type('chatmander')

    cy.get('.searchButton')
      .click()

    cy.wait('@getFirst')

    cy.get('.PageNotFound')
      .should('be.visible')
      .and('contain', 'Something went wrong: 404- Page Not Found!')
  })

  it('should have 5 pokemon images with their names displayed', () => {

    cy.get('.cardImage')
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

    cy.wait('@getFirst')
    cy.get('.cardImage')
      .first().click()
      .url().should('eq', 'http://localhost:3000/bulbasaur')
  })

  it('should direct you to the pokemon details page when clicking on another pokemon image', () => {
    cy.wait('@getSecond')
    cy.wait('@fetchFive')
    cy.get('.cardImage')
      .eq(1).click()
      .url().should('eq', 'http://localhost:3000/ivysaur')
  })

})