import { recurse } from 'cypress-recurse'

import { standardAccount, groupAccount, adminAccount } from "cypress/utils/testAccounts";

const newAccountId = (Math.random() * 100000).toFixed(0)

describe('Onboarding', () => {
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

  describe('/create-account', () => {
    it('Create account page navigation', () => {
      cy.visit('http://localhost:3000/create-account/')
      cy.get('button[name="navigate-login"]').click()
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/login/')
      })
    });
    
    it('Create account > view tutorial modal > view dashboard', () => {
      cy.visit('http://localhost:3000/create-account/')
      
      cy.get('button[name="sign-up"]').click()

      // check required error messages are visible
      cy.contains('Email is required')
      cy.contains('Password is required')
      cy.contains('Please accept the Terms and Privacy Policy')
  
      // displays invalid email error
      cy.get('input[name="email"]').type(`dan.stevenson+motion`)
      cy.contains('Email is invalid')
      
      // display password too short error
      cy.get('input[name="password"]').type(`reyt`)
      cy.contains('Password must be at least 8 characters')
  
      // displays password must contain a number error
      cy.get('input[name="password"]').clear().type(`reytmotion`)
      cy.contains('Password must contain a number')
  
      // displays password must not contain a space
      cy.get('input[name="password"]').clear().type(`reytmotion 1`)
      cy.contains('Password must not contain a space')
  
      // enter valid password
      cy.get('input[name="password"]').clear().type(`reytmotion${newAccountId}`)
  
      // display duplicate email address error and receive server error
      cy.get('input[name="email"]').clear().type(`dan.stevenson+motion1@reyt.co.uk`)
      cy.get('input[name="terms"]').click()
      cy.intercept('POST', '/auth/register').as('registerAccount')
      cy.get('button[name="sign-up"]').click()
      cy.wait('@registerAccount').then(({response}) => {
        cy.log(response)
        expect(response?.statusCode).to.eq(400)
      })
      cy.contains('This email address is already registered. Please log in or create a new account.')
  
      // enter valid email address and submit
      cy.get('input[name="email"]').clear().type(`dan.stevenson+motion${newAccountId}@reyt.co.uk`)
      cy.get('button[name="sign-up"]').click()
  
      cy.wait('@registerAccount').then(({response}) => {
        cy.log(response)
        expect(response?.statusCode).to.eq(200)
      })
  
      // redirects to 'additional-information' screen
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/additional-information/')
      })

      cy.get('button[name="complete"]').click()

      cy.contains('Name of service provider is required')
      cy.contains('Your name is required')
      cy.contains('Phone number is required')

      cy.get('input[name="serviceProviderName"]').type('REYT')
      cy.get('input[name="mainContactName"]').type('Dan Stevenson')
      
      // not enough numbers
      cy.get('input[name="phoneNumber"]').type('078123')
      cy.contains('Please enter a valid phone number (between 7 and 15 numbers with no special characters)')
      // too many numbers
      cy.get('input[name="phoneNumber"]').clear().type('0781234567890123')
      cy.contains('Please enter a valid phone number (between 7 and 15 numbers with no special characters)')
      // contains other characters (special characters)
      cy.get('input[name="phoneNumber"]').clear().type('+447888888888')
      cy.contains('Please enter a valid phone number (between 7 and 15 numbers with no special characters)')
      cy.get('input[name="phoneNumber"]').clear().type('07812345678')

      cy.get('input[name="city"]').type('Sheffield')

      cy.get('div[data-test-id="howDidYouHearAboutUs"]').click()
      cy.get('li[data-value="Facebook"')
      cy.get('li[data-value="Email"')
      cy.get('li[data-value="LinkedIn"')
      cy.get('li[data-value="Social-Ability"')
      cy.get('li[data-value="Sheffield City Trust"')
      cy.get('li[data-value="Word of mouth"').click()

      cy.get('div[data-test-id="isPartOfAGroup"]').click()
      cy.get('li[data-value="No"')
      cy.get('li[data-value="Not sure"')
      cy.get('li[data-value="Yes"').click()

      cy.get('input[name="groupName"]').type('REYT/Motion')

      cy.get('button[name="complete"]').click()
      
      // redirects to 'dashboard' screen
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/')
      })

      // dashboard includes tutorial modal on first login
      cy.get('.tutorial-modal-box').should('be.visible')

      // first page
      cy.get('.tutorial-modal-page-image-1').should('be.visible')
      cy.get('.tutorial-modal-page-header-1').should('be.visible')
      cy.get('.tutorial-modal-page-paragraph-1').should('be.visible')
      cy.get('.tutorial-modal-page-continue-button-1').should('be.visible')
      cy.get('.tutorial-modal-page-continue-button-1').click()

      // second page
      cy.get('.tutorial-modal-page-image-2').should('be.visible')
      cy.get('.tutorial-modal-page-header-2').should('be.visible')
      cy.get('.tutorial-modal-page-paragraph-2').should('be.visible')
      cy.get('.tutorial-modal-page-continue-button-2').should('be.visible')
      cy.get('.tutorial-modal-page-continue-button-2').click() 

      // third page
      cy.get('.tutorial-modal-page-image-3').should('be.visible')
      cy.get('.tutorial-modal-page-header-3').should('be.visible')
      cy.get('.tutorial-modal-page-paragraph-3').should('be.visible')
      cy.get('.tutorial-modal-page-continue-button-3').should('be.visible')
      cy.get('.tutorial-modal-page-continue-button-3').click() 

      // fourth page
      cy.get('.tutorial-modal-page-image-4').should('be.visible')
      cy.get('.tutorial-modal-page-header-4').should('be.visible')
      cy.get('.tutorial-modal-page-paragraph-4').should('be.visible')
      cy.get('.tutorial-modal-page-continue-button-4').should('be.visible')
      cy.get('.tutorial-modal-page-continue-button-4').click() 

      // fifth page
      cy.get('.tutorial-modal-page-image-5').should('be.visible')
      cy.get('.tutorial-modal-page-header-5').should('be.visible')
      cy.get('.tutorial-modal-page-paragraph-5').should('be.visible')
      cy.get('.tutorial-modal-page-continue-button-5').should('be.visible')
      cy.get('.tutorial-modal-page-continue-button-5').click() 

      // tutorial modal disappears
      cy.get('.tutorial-modal-box').should('not.exist')
    })
  })
  
  describe('/login', () => {
    it('Login page navigation', () => {
      cy.visit('http://localhost:3000/login/')
      cy.get('button[name="navigate-create-account"]').click()
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/create-account/')
      })
      
  
      cy.visit('http://localhost:3000/login')
      cy.get('button[name="navigate-reset-password"]').click()
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/reset-password/')
      })
    });
    
    it('Login with validation', () => {
      cy.visit('http://localhost:3000/login')
      
      cy.get('button[name="login"]').click()
      
      // check required error messages are visible
      cy.contains('Email is required')
      cy.contains('Password is required')
  
      // displays invalid email error
      cy.get('input[name="email"]').type(`dan.stevenson+motion`)
      cy.contains('Email is invalid')

      // display password too short error
      cy.get('input[name="password"]').type(`reyt`)
      cy.contains('Password must be at least 8 characters')
  
      // displays password must contain a number error
      cy.get('input[name="password"]').clear().type(`reytmotion`)
      cy.contains('Password must contain a number')

      // displays password must not contain a space
      cy.get('input[name="password"]').clear().type(`reytmotion 1`)
      cy.contains('Password must not contain a space')
  
      // display account not found and receive server error
      cy.get('input[name="email"]').clear().type(`dan.stevenson+motion1-account-not-found@reyt.co.uk`)
      cy.get('input[name="password"]').clear().type(`reytmotion1`)
      cy.intercept('POST', '/auth/login').as('login')
      cy.get('button[name="login"]').click()
      cy.wait('@login').then(({response}) => {
        cy.log(response)
        expect(response?.statusCode).to.eq(401)
        expect(response?.body.message).to.eq("Incorrect username or password")
      })
      cy.contains('Incorrect username or password. Please try again.')
  
      // enter valid email but incorrect password - display incorrect password error
      cy.get('input[name="email"]').clear().type(`dan.stevenson+motion${newAccountId}@reyt.co.uk`)
      cy.get('input[name="password"]').clear().type(`reytmotion1`)
      cy.get('button[name="login"]').click()
      cy.wait('@login').then(({response}) => {
        cy.log(response)
        expect(response?.statusCode).to.eq(401)
        expect(response?.body.message).to.eq("Incorrect username or password")
      })
      cy.contains('Incorrect username or password. Please try again.')
  
      // enter correct password and login
      cy.get('input[name="password"]').clear().type(`reytmotion${newAccountId}`)
      cy.get('button[name="login"]').click()
      cy.wait('@login').then(({response}) => {
        cy.log(response)
        expect(response?.statusCode).to.eq(200)
        expect(response?.body.accountStatus).to.equal('standard')
      })
      // redirects to dashboard screen
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/')
      })
      
      // tutorial modal is not visible on subsequent login 
      cy.wait(500)
      cy.get('.tutorial-modal-box').should('not.exist')
    })
  })

  // TODO: fix issues with Ethereal mail and Cypress tasks
  describe('/reset-password', () => {
    let etherealEmail: string
    let etherealPassword: string
  
    beforeEach(() => {
      recurse(
        () => cy.task("createAccount"),
        Cypress._.isObject, // keep retrying until the task returns an object
        {
          log: true,
          timeout: 20000, // retry up to 20 seconds
          delay: 5000, // wait 5 seconds between attempts
          error: "Could not create test email"
        }
      ).then((testAccount) => { // testAccount created by Ethereal mail client
        etherealEmail = testAccount.user
        etherealPassword = testAccount.pass
        cy.log(`Email account created - (for debugging purposes): ${etherealEmail}`)
        cy.log(`Email account password - (for debugging purposes): ${etherealPassword}`)
      })
    })
    
    it('Reset password and login with new one', () => {
      // create account
      cy.visit('http://localhost:3000/create-account/')
      cy.get('input[name="email"]').clear().type(etherealEmail)
      cy.get('input[name="password"]').clear().type(etherealPassword)
      cy.get('input[name="terms"]').click()
      
      cy.intercept('POST', '/auth/register').as('registerAccount')
      cy.get('button[name="sign-up"]').click()
      cy.get('button[name="sign-up"]').click()
      cy.wait('@registerAccount')
      
      cy.visit('http://localhost:3000/reset-password')
  
      // check required error message is visible
      cy.get('button[name="reset-password"]').click()
      cy.contains('Email is required')
  
      // displays invalid email error
      cy.get('input[name="email"]').type(`dan.stevenson+motion`)
      cy.contains('Email is invalid')

      // enter valid email address 
      cy.get('input[name="email"]').clear().type(etherealEmail)
      cy.intercept('POST', '/auth/reset-password').as('resetPassword')
      cy.get('button[name="reset-password"]').click()
      cy.wait('@resetPassword')
      cy.contains(`If the email address exists you will receive an email to ${etherealEmail}`)
  
      // fetch the email
      cy.wait(5000)
      recurse(
        () => cy.task("getLastEmail", { user: etherealEmail, pass: etherealPassword }), // Cypress commands to retry
        Cypress._.isObject, // keep retrying until the task returns an object
        {
          log: true,
          timeout: 30000, // retry up to 30 seconds
          delay: 5000, // wait 5 seconds between attempts
          error: "Messages Not Found"
        }
      ).then((message) => {
        cy.task("parseEmail", { message })
          .its("html")
          .then((html) => {
            cy.document().then(document => {
              document.body.innerHTML = html;
            });
          })
      })
  
      cy.get("h1").should("contain","Reset password")
      cy.get("a").click()
      
      // redirects to 'new-password' screen
      cy.location().should((loc) => {
        expect(loc.pathname).to.contain('/new-password')
      })
  
      // check required error message
      cy.get('button[type="submit"]').click()
      cy.contains('Password is required')
  
      // display password too short error
      cy.get('input[name="password"]').type(`reyt`)
      cy.contains('Password must be at least 8 characters')
  
      // displays password must contain a number error
      cy.get('input[name="password"]').clear().type(`reytmotion`)
      cy.contains('Password must contain a number')
  
      // displays password must not contain a space
      cy.get('input[name="password"]').clear().type(`reytmotion 1`)
      cy.contains('Password must not contain a space')
  
      // enter valid password
      cy.get('input[name="password"]').clear().type(`reytmotion${newAccountId}`)
      
      cy.get('button[type="submit"]').click()
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/login/')
      })
  
      // enter email and new password
      cy.get('input[name="email"]').clear().type(etherealEmail)
      cy.get('input[name="password"]').clear().type(`reytmotion${newAccountId}`)
      cy.get('button[name="login"]').click()
      cy.wait('@login').then(({response}) => {
        cy.log(response)
        expect(response?.statusCode).to.eq(200)
      })
      // redirects to dashboard screen
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/')
      })
    })
  })

  describe('logout', () => {
    it('logs account out and and revokes access to the app', () => {
      cy.visit('http://localhost:3000/login/')
      cy.get('input[name="email"]').clear().type(`dan.stevenson+motion1@reyt.co.uk`)
      cy.get('input[name="password"]').clear().type(`reytmotion1`)
      cy.intercept('POST', '/auth/login').as('login')
      cy.get('button[name="login"]').click()
      cy.wait('@login').then(({response}) => {
        cy.log(response)
        expect(response?.statusCode).to.eq(200)
        expect(response?.body.accountStatus).to.equal('standard')
      })
      // redirects to dashboard screen
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/')
      })
  
      // can navigate to app page
      cy.get('li').contains("Wellbeing activities").click()
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/activities/`)
      })
  
      cy.intercept('POST', '/auth/logout').as('logout')
      cy.get('a').contains("Log out").click()
      cy.wait('@logout').then(({response}) => {
        cy.log(response)
        expect(response?.statusCode).to.eq(200)
      })
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/login/`)
      })
      
      // revokes access to the app
      cy.intercept('GET', '/activities/').as('getActivities')
      cy.go('back')
      cy.wait('@getActivities').then(({response}) => {
        cy.log(response)
        expect(response?.statusCode).to.eq(401)
      })

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/login/`)
      })
    });


  });

  describe('Server errors - display error banner', () => {
    it('/login', () => {
      cy.visit('http://localhost:3000/login')

      cy.intercept(
        'POST',
        '**/auth/login',
        { statusCode: 500 }
      ).as('getLoginFailure')
  
      cy.get('input[name="email"]').clear().type(`dan.stevenson+motion1@reyt.co.uk`)  
      cy.get('input[name="password"]').clear().type(`reytmotion1`)
      cy.get('button[name="login"]').click()
  
      cy.wait('@getLoginFailure')
  
      cy.contains("Something went wrong - please try again")
    })

    it('/create-account', () => {
      cy.visit('http://localhost:3000/create-account')

      cy.intercept(
        'POST',
        '**/auth/register',
        { statusCode: 500 }
      ).as('getAccountCreateFailure')
  
      cy.get('input[name="email"]').clear().type(`dan.stevenson+motion1@reyt.co.uk`)  
      cy.get('input[name="password"]').clear().type(`reytmotion1`)
      cy.get('input[name="terms"]').click()
      cy.get('button[name="sign-up"]').click()
  
      cy.wait('@getAccountCreateFailure')
  
      cy.contains("Something went wrong - please try again")
    })

    it('/additional-information', () => {
      // accountId does not exist
      cy.visit('http://localhost:3000/additional-information/?accountId=51ca7f48-d1ca-48e8-8cb2-43b4084f8708&email=dan.stevenson+motion1@reyt.co.uk')

      cy.intercept('PATCH', '**/account/update/*', {
        statusCode: 403,
      }).as('getUpdateAccountFailure')
  
      cy.get('input[name="serviceProviderName"]').type('REYT')
      cy.get('input[name="mainContactName"]').type('Dan Stevenson')
      cy.get('input[name="phoneNumber"]').clear().type('07812345678')
      cy.get('input[name="city"]').type('Sheffield')
      cy.get('div[data-test-id="howDidYouHearAboutUs"]').click()
      cy.get('li[data-value="Word of mouth"').click()
      cy.get('div[data-test-id="isPartOfAGroup"]').click()
      cy.get('li[data-value="Yes"').click()
      cy.get('input[name="groupName"]').type('REYT/Motion')
      cy.get('button[name="complete"]').click()
  
      cy.wait('@getUpdateAccountFailure')
      cy.wait(1000)
  
      cy.contains("Something went wrong - please try again")
    });

    it('/reset-password', () => {
      cy.visit('http://localhost:3000/reset-password')
  
      cy.intercept(
        'POST',
        '**/auth/reset-password',
        { statusCode: 500 }
        ).as('getResetPasswordFailure')
        
      cy.get('input[name="email"]').clear().type('dan.stevenson+motion1@reyt.co.uk')
      cy.get('button[name="reset-password"]').click()
      
      cy.wait('@getResetPasswordFailure')

      cy.contains("Something went wrong - please try again")
    });

    it('/new-password', () => {
      cy.visit('http://localhost:3000/new-password')
        
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/login/')
      })

      cy.contains("Password reset link expired. Please login or request a new reset link.")
    });
  });
})