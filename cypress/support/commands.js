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
import { userSelectors } from "../support/selectors"

Cypress.Commands.add('login', (username) => {

    if (username == "Hermoine"){
      cy.get(userSelectors.userSelect).select("Hermoine Granger")
      } else if (username = "Harry"){
          cy.get(userSelectors.userSelect).select("Harry Potter")
      } else if (username = "Ron") {
          cy.get(userSelectors.userSelect).select("Ron Weasly")
      } else if (username = "Albus"){
          cy.get(userSelectors.userSelect).select("Albus Dumbledore")
      } else if (username = "Neville"){
          cy.get(userSelectors.userSelect).select("Neville Longbottom")
      }
  
      cy.get(userSelectors.loginButton).click()
      })