import { userSelectors } from "../support/selectors"

describe('Simple Bank sandbox for cypress testing', () => {
	beforeEach(() => {
		cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
	})

	it('Customer login', () => {
		cy.get(userSelectors.customerLogin).click() 
    cy.login("Harry")
	})
})