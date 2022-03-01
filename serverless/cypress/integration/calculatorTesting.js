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

describe('Calculator Headings', () => {
    it('should find calculator and category headings', () => {

        // Visits page
        cy.visit('/calculator')

        // Checks calculator heading
        cy.get('h2').contains('Calculator')

        // Checks category heading
        cy.get('h3').contains('Select a category:')

        // Checks category headings
        cy.get('label.form-check-label').contains('Food')
        cy.get('label.form-check-label').contains('Transport')
        cy.get('label.form-check-label').contains('Energy')

    })
})

describe('Progress Bar Elements', () => {
    it('should find progress bar and category headings, and percentages', () => {

        // Visits page
        cy.visit('/calculator')

        // Checks Progress Bar heading
        cy.get('h3').contains('Progress Bar')

        // Checks category name and percentage
        cy.get('h1').contains('Food')
        cy.get('text.CircularProgressbar-text').contains('14%')

        // Checks category name and percentage
        cy.get('h1').contains('Transport')
        cy.get('text.CircularProgressbar-text').contains('56%')

        // Checks category name and percentage
        cy.get('h1').contains('Energy')
        cy.get('text.CircularProgressbar-text').contains('89%')

    })
})