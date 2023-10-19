/// <reference types="cypress" />

class ProductPage{
    elements = {
        btnAddToCart: () => cy.get('a.btn')
    }

    addToCart(index) {
        this.elements.btnAddToCart().click()
    }
}

module.exports = new ProductPage()