# Cypress project for Devsu
This is a cypress demo for a technical test of QA Automation

 - [Getting Started](#getting-started)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [Steps to run using Cypress UI](#steps-to-run-using-cypress-ui)
	- [Steps to run in console](#steps-to-run-in-console)

## Getting Started
### Prerequisites
- Node.js
### Installation
Clone this repo. 

```js
git clone https://github.com/cristian-cordoba/cy-test.git
```
Install dependencies. 

```js
npm install
```

### Steps to run using Cypress UI

- type 'npx cypress open'
```js
npx cypress open
```
- Select 'E2E Testing'
- Select a browser and click on 'Start E2E testing' button
- click on purchase.cy.js to run E2E tests
- click on petStore-API.cy.js to run API tests

### Steps to run in console:
- To run E2E tests
```js
npm run test-e2e
```
- To run API tests
```js
npm run test-api
```