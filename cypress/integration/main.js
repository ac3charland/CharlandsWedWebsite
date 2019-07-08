it('should be at the home url', () => {
    cy.visit('/')
    cy.get('.heading')
})