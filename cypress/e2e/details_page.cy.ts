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
it('should show the pokemons height and weight', () => {
  cy.get('.height-and-weight')
    .children()
    .should('contain', 'Height')
    .and('contain', 'Weight')
})
it('should display the pokemons type', () => {
  cy.get('.pokemon-types')
    .should('be.visible')
})
it('should display the pokemons basic stats', () => {
  cy.get('.indiv-stats-container')
    .children()
    .should('contain', 'Hp')
    .and('contain', 'Attack')
    .and('contain', 'Defense')
    .and('contain', 'Special-attack')
    .and('contain', 'Speed')
})
it('should display the pokemons strter moves', () => {
  cy.get('.move-container')
    .should('be.visible')
  .get('.move-name')
    .should('be.visible')
})
it('should redirect you back to the main page when the website icon is clicked', () => {
  cy.get('.logo')
      .first().click()
      .url().should('eq', 'http://localhost:3000/')
})
})