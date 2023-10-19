/// <reference types="cypress" />

const userData = {
    "id": 12345,
    "username": "cris",
    "firstName": "Cristian",
    "lastName": "Cordoba",
    "email": "cristian.cordoba@gmail.com",
    "password": "123",
    "phone": "381381381",
    "userStatus": 0
}
  
const userUpdatedData = {
    "id": 12345,
    "username": "cris",
    "firstName": "Cristian Mariano",
    "lastName": "Cordoba",
    "email": "cristian@gmail.com",
    "password": "123",
    "phone": "381381381",
    "userStatus": 0
}

const url = 'https://petstore.swagger.io/v2/user/'

describe('API testing for pet store', () => {
    
    it('should create a user', () => {
      cy.request({
          method: 'POST',
          url: url,
          body: userData
      }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.message).to.equal('12345');
      })
    })
    
    it('should get a user', () => {
        cy.request('GET', url + userData.username).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.deep.equal(userData);
        })
    })
    
    it('should update name and email', () => {
        cy.request({
            method: 'PUT',
            url: url + userData.username,
            body: userUpdatedData
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal('12345');
        })
    })
    
    it('should get updated user', () => {
        cy.request('GET', url + userData.username).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.deep.equal(userUpdatedData);
        })
    })
    
    it('should delete user ', () => {
        cy.request('DELETE', url + userData.username).then((response) => {
            expect(response.status).to.equal(200);
        })
    })
    
})
