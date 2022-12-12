// Start cypress npx cypress open 
// cypress/e2e/sample-action.cy.js
describe('A sample action test', () => {
    it('Visits the IANA reserved domains list', () => {
      cy.visit('https://www.iana.org/domains/reserved')
      cy.contains('XN--JXALPDLP').click()
  
      cy.url().should('include', 'root/db/xn--jxalpdlp')
      cy.get('h1').should('contain', 'Delegation Record for .ΔΟΚΙΜΉ')
    })
  })