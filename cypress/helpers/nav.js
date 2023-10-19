/// <reference types="cypress" />

class Nav{
    elements = {
        home: () => cy.get(':nth-child(1) > a.nav-link'),
        cart: () => cy.get(':nth-child(4) > a.nav-link')
    }

    goToHome() {
        this.elements.home().click()
        cy.url().should('contain', 'index.html')      
    }

    goToCart() {
        this.elements.cart().click()
        cy.url().should('contain', 'cart.html')      
    }
}

module.exports = new Nav()