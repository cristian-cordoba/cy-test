/// <reference types="cypress" />

const orderData = {
    "name": "Cristian",
    "country": "Argentina",
    "city": "Tucuman",
    "card": "1111 2222 3333 4444",
    "month": "11",
    "year": "2026"
}

class CartPage{

    elements = {
        btnPlaceOrder: () => cy.get('.col-lg-1 > .btn'),
        modalPlaceOrder: () => cy.get('#orderModal > .modal-dialog'),
        placeOrder : {
            name: () => cy.get('#name'),
            country: () => cy.get('#country'),
            city: () => cy.get('#city'),
            card: () => cy.get('#card'),
            month: () => cy.get('#month'),
            year: () => cy.get('#year'),
            messageHeader: () => cy.get('body > div.sweet-alert.showSweetAlert.visible > h2'),
            BtnPurchase: () => cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        }
    }

    clickOnPlaceOrder(index) {
        this.elements.modalPlaceOrder().should('not.be.visible')
        this.elements.btnPlaceOrder().click()
        this.elements.modalPlaceOrder().should('be.visible')
    }

    fillOrderForm() {
        this.elements.placeOrder.name().type(orderData.name)
        this.elements.placeOrder.country().type(orderData.country)
        this.elements.placeOrder.city().type(orderData.city)
        this.elements.placeOrder.card().type(orderData.card)
        this.elements.placeOrder.month().type(orderData.month)
        this.elements.placeOrder.year().type(orderData.year)

        this.elements.placeOrder.BtnPurchase().click()        
    }

    verifyConfirmationMessage() {
       this.elements.placeOrder.messageHeader().should('be.visible')
                                               .should('have.text', 'Thank you for your purchase!')
            
    }
}

module.exports = new CartPage()