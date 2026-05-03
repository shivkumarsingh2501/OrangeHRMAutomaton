export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators(centraliszed)
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.LoginButton = page.locator('button[type="submit"]');
    this.dashboardText = page.getByRole("heading", { name: "Dashboard" });
    this.errorMessage = page.locator(".oxd-alert");
    this.validationMessage = page
      .locator(".oxd-alert, .oxd-input-field-error-message")
      .first();
  }

  async navigate(url) {
    const finalUrl =
      url ||
      process.env.BASE_URL ||
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

    await this.page.goto(finalUrl, { waitUntil: "load" });
  }
  async enterCredentials(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    
  }
  async clickLogin() {
    await this.LoginButton.click();
  }
  async login(username, password) {
    await this.enterCredentials(username, password);
  }
  async isDashboardVisible() {
    await this.dashboardText.waitFor();
  }
  async getErrorMessage() {
    await this.validationMessage.waitFor();
    return await this.validationMessage.textContent();
  }
}
