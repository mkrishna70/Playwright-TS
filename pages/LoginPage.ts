import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = page.getByRole("link", { name: "Log in" });
    this.userNameInput = page.getByLabel("Email");
    this.passwordInput = page.getByLabel("Password");
    this.loginBtn = page.getByRole("button", { name: "Log in" });
  }

  async goToApplication() {
    await this.page.goto(`${process.env.BASE_URL}`);
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }

  async enterUserCredentials(username: string, password: string) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}
