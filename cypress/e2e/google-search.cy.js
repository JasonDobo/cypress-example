// cypress/e2e/sample-action.cy.js
describe('A sample action test', () => {
    it('Google search test', () => {
        cy.visit('https://www.google.com')
        cy.get('input[name="q"]')

        cy.get('#L2AGLb').click()
        // cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#hplogo').should('be.visible')
        cy.get('.gLFyf').click()
        cy.get('.gLFyf').type('Hello, World\n')

        cy.get('#result-stats').should('be.visible')
        cy.get('.g > :nth-child(1) > [jscontroller="SC7lYd"]').should('be.visible')
      })
})