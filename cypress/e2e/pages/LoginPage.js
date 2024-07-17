const selectorsHR = require('../../fixtures/locatorsHR.json');
const users = require('../../fixtures/users.json');
const urls = require('../../fixtures/urls.json');

export class LoginPage {
    loginWithUser() {
        cy.visit(urls.loginPage);
        cy.get(selectorsHR.usernameField).type(users.Admin.username);
        cy.get(selectorsHR.passwordField).type(users.Admin.password);
        cy.get(selectorsHR.loginButton).click();
    }
}