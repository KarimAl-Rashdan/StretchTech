
describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon')
    cy.fixture('example.json')
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


})