describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/charmander')
  })
  it('should still have access to the nav bar when in the details page', () => {
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
it('should show you an image of the pokemon that has been selected/searched', () => {
  cy.get('.image-container')
    .should('be.visible')
  
  cy.get('.pokemon-image')
    .should('be.visible')
})
it('should show the pokemons height and weight')
})