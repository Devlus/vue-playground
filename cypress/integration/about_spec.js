describe('About ', function () {

    it('should have be able to toggle switch', function () {
        cy.visit('localhost:8080/#/about')
        cy.get('label[data-test="label"]').should('have.text', 'false');
        cy.get('button[data-test="switch"]').click()
        cy.get('label[data-test="label"]').should('have.text', 'true');
        cy.get('button[data-test="switch"]').click()
        cy.get('label[data-test="label"]').should('have.text', 'false');
    });
});