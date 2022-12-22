describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should render the page', () => {
    cy.get('[data-cy=heading]').should('have.text', 'Nest.js with Charkra UI')
  })
})

export default undefined // Por causa do Typescript do Nestjs
