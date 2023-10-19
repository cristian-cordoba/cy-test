/// <reference types="cypress" />

class HomePage{
    elements = {
        itemsTable: () => cy.get('#tbodyid')
    }

    clickProductNumber(index) {
        this.elements.itemsTable().find('div > a').then(($items) => { 
            const totalItems = $items.length
            cy.wrap(index).should('be.lessThan', totalItems)
            
            cy.wrap($items[index]).click()
        })
        cy.url().should('contain', 'prod.html')      
    }
}

module.exports = new HomePage()