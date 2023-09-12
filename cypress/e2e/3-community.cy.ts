import { standardAccount, groupAccount, adminAccount } from "cypress/utils/testaccounts";

describe('Community', () => {
  Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
      cy.visit('http://localhost:3000/login')
      cy.get('input[name="email"]').clear().type(email)
      cy.get('input[name="password"]').clear().type(password)
      cy.intercept('POST', '/auth/login').as('login')
      cy.get('button[name="login"]').click()
      cy.wait('@login').then(({response}) => {
        expect(response?.statusCode).to.eq(200)
      })
      cy.url().should('contain', '/')
    })
  })

  describe('add service provider', () => {
    it('regular account', () => {
      cy.login(standardAccount.email, standardAccount.password)
      cy.visit('http://localhost:3000/')

      cy.get('li').contains("Community").click()

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/community/`)
      })

      cy.get('button[data-test-id="add-service-provider-button"]').should('not.exist')
    });

    it('group account', () => {
      cy.login(groupAccount.email, groupAccount.password)
      cy.visit('http://localhost:3000/')

      cy.get('li').contains("Community").click()

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/community/`)
      })

      cy.get('button[data-test-id="add-service-provider-button"]').should('exist')
    });

    it('admin account', () => {
      cy.login(adminAccount.email, adminAccount.password)
      cy.visit('http://localhost:3000/')

      cy.get('li').contains("Community").click()

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/community/`)
      })

      cy.get('button[data-test-id="add-service-provider-button"]').should('exist')
    });

  })
});

