import { Locator, Page } from "@playwright/test";

export class LogoutPage {
  readonly page: Page;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutLink = page.getByRole("link", { name: "Log out" });
  }

  async clickOnLogoutLink() {
    await this.logoutLink.click();
  }
}
