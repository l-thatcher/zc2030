describe('Navigation', () => {
    it('should navigate to the about page', () => {
        // Start from the index page
        cy.visit('/')

        cy.get('button.navbar-toggler.collapsed').click() // Click on button
        // Find a link with an href attribute containing "about" and click it
        cy.get('a[href*="calculator"]').click()

        // The new url should include "/about"
        cy.url().should('include', '/calculator')

        // The new page should contain an h1 with "About page"
        cy.get('h1').contains('Carbon Calculator')
    })
})