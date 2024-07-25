import {
  standardAccount,
  groupAccount,
  adminAccount,
} from "cypress/utils/testAccounts";

describe("Navigation", async () => {
  Cypress.Commands.add("login", (email, password) => {
    cy.session([email, password], async () => {
      cy.visit("http://localhost:3000/wellbeing/login");
      cy.get('input[name="email"]').clear().type(email);
      cy.get('input[name="password"]').clear().type(password);

      //click termly accept
      cy.get("button").contains("Accept").click();

      cy.intercept("POST", "/auth/login").as("login");
      cy.get('button[name="login"]').click();
      cy.wait("@login").then(({ response }) => {
        expect(response?.statusCode).to.eq(200);
      });
      cy.url().should("contain", "/");
    });
  });

  describe("Top navigation buttons", () => {
    describe("Should contain regular links", () => {
      const topNavigationButtons = [
        {
          title: "Home",
          path: "",
        },
        {
          title: "My planner",
          path: "/planner",
        },
        {
          title: "Community",
          path: "/community",
        },
        {
          title: "Announcements",
          path: "/announcements",
        },
      ];

      topNavigationButtons.forEach((page) => {
        it(`should navigate to ${page.title} page`, () => {
          cy.login(standardAccount.email, standardAccount.password);
          cy.visit("http://localhost:3000/");
          cy.get("li").contains(page.title).click();

          cy.location().should((loc) => {
            expect(loc.pathname).to.eq(`${page.path}/`);
          });
        });
      });
    });

    describe("Wellbeing activities accordion links", () => {
      beforeEach(() => {
        cy.login(standardAccount.email, standardAccount.password);
      });

      const activitiesSubNavigation = [
        {
          title: "* NEW *",
          filter: "new",
        },
        {
          title: "Armchair travel",
          filter: "armchair-travel",
        },
        {
          title: "Arts & Crafts",
          filter: "arts-and-crafts",
        },
        {
          title: "Culture & Religion",
          filter: "culture-and-religion",
        },
        {
          title: "Education",
          filter: "education",
        },
        {
          title: "Movement & Sport",
          filter: "movement-and-sport",
        },
        {
          title: "Music",
          filter: "music",
        },
        {
          title: "Staff wellbeing",
          filter: "staff-wellbeing",
        },
      ];

      activitiesSubNavigation.forEach((activity) => {
        it(`should contain link for ${activity.title}`, () => {
          cy.visit("http://localhost:3000/");
          cy.get("li").contains("Wellbeing activities").click();
          cy.get("li").contains(activity.title).click();

          cy.location().should((loc) => {
            expect(loc.pathname).to.eq(`/activities/`);
          });
        });
      });
    });
  });

  describe("Bottom links", () => {
    it("should contain correct links for a regular account", () => {
      cy.login(standardAccount.email, standardAccount.password);
      cy.visit("http://localhost:3000/");

      // upgrade
      cy.get("button").contains("Upgrade").click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/upgrade/`);
      });

      // support
      cy.get("button").contains("Get support").click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/support/`);
      });

      // logout
      cy.get("a").contains("Log out").click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/login/`);
      });
    });

    it('should contain correct links for a "group" account', () => {
      cy.login(groupAccount.email, groupAccount.password);
      cy.visit("http://localhost:3000/");

      // upgrade
      cy.get("button").contains("Upgrade").click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/upgrade/`);
      });

      // support
      cy.get("button").contains("Get support").click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/support/`);
      });

      // logout
      cy.get("a").contains("Log out").click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/login/`);
      });
    });

    it('should contain correct links for an "admin" account', () => {
      // TODO: why is this not creating a new account session?
      // cy.login(adminAccount.email, adminAccount.password)
      // cy.visit('http://localhost:3000/')

      cy.visit("http://localhost:3000/wellbeing/login");
      cy.get('input[name="email"]').clear().type(adminAccount.email);
      cy.get('input[name="password"]').clear().type(adminAccount.password);
      cy.intercept("POST", "/auth/login").as("login");
      cy.get('button[name="login"]').click();
      cy.wait("@login").then(({ response }) => {
        expect(response?.statusCode).to.eq(200);
      });

      // upgrade button not visible for admin accounts
      cy.get(".upgrade-button").should("not.exist");

      // support
      cy.get("button").contains("Get support").click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/support/`);
      });

      // logout
      cy.get("a").contains("Log out").click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq(`/login/`);
      });
    });
  });
});
