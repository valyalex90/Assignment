// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('requestURL', (endpoint, method) => {
    cy.request({
        method: method,
        url: 'https://pacific-taiga-76065.herokuapp.com/'+endpoint,
        headers: {'x-authentication-token': 'very-secrete-token'} 
    }).then( (response) => {
        cy.wrap(response).its('status').as('responseStatusCode');
        cy.wrap(response).its('headers').as('responseHeaders');
        cy.wrap(response).its('body').as('responseBody');
        cy.wrap(response).its('duration').as('responseDuration');
    })
  });

Cypress.Commands.add('postMsg', (idvalue, messageValue) => {
    cy.request({
        method: 'POST',
        url: 'https://pacific-taiga-76065.herokuapp.com/messages/'+idvalue+messageValue,
        headers: {'x-authentication-token': 'very-secrete-token'} 
    }).then ((response) => {
        cy.wrap(response).its('status').as('responseStatusCode');   
    })
})

Cypress.Commands.add('randomClickElemFromList', (element) => {
    cy.get(element).its('length').then(elementCount => {
      let selected = Cypress._.random(elementCount - 1);
      cy.get(element,{timeout:10000}).eq(selected).click();
    })
  })

Cypress.Commands.add('ignoreUncaughtException', (element) => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
    })
})