const selectorsHR = require ("../../fixtures/locatorsHR.json");
import { LoginPage } from "../pages/LoginPage";
const loginPage = new LoginPage();

describe("successful login for OrangeHRM", () => 
    {
        it("Login with admin user", () => 
        {
            loginPage.loginWithUser();
            cy.get(selectorsHR.userLoggedDropdown).should("be.visible");
            cy.get(selectorsHR.dashboardPageTitle).should("be.visible");
        })
    }
)