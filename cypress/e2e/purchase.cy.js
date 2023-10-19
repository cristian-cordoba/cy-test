/// <reference types="cypress" />

const nav = require("../helpers/nav.js")
const homePage = require("../helpers/homePage.js")
const productPage = require("../helpers/productPage.js")
const cartPage = require("../helpers/cartPage.js")

describe('Purchase', () => {
  it('should buy 2 products', () => {
    
    cy.visit('https://demoblaze.com/')

    homePage.clickProductNumber(8)
    productPage.addToCart()
    nav.goToHome()

    homePage.clickProductNumber(3)
    productPage.addToCart()
    nav.goToCart()

    cartPage.clickOnPlaceOrder()
    cartPage.fillOrderForm()
    cartPage.verifyConfirmationMessage()

  })
  
})