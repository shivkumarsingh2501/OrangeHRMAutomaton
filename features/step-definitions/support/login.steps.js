import { Given, When, Then } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import { LoginPage } from "../../../pages/login.page.js";
import { config } from "../../../utils/config.js";

Given("user navigates to login page", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate(config.baseUrl);
});

When("user enters valid username and password", async function () {
  await this.loginPage.login(config.username, config.password);
});

Then("user should see dashboard", async function () {
  await this.loginPage.isDashboardVisible();
});

When(
  "user enters username {string} and password {string}",
  async function (username, password) {
    await this.loginPage.login(username, password);
  },
);
When("clicks on login button", async function () {
  await this.loginPage.clickLogin();
});

Then(
  "error message {string} should be displayed",
  async function (expectedMessage) {
    const error = await this.loginPage.getErrorMessage();
    assert.match(error, new RegExp(expectedMessage));
  },
);

Then("login result should be {string}", async function (result) {
  if (result === "success") {
    await this.loginPage.isDashboardVisible();
  } else {
    const error = await this.loginPage.getErrorMessage();
    assert.match(error, /Invalid|required/i);
  }
});
