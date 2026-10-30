import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";

type POMFixture = {
  loginPage: LoginPage;
  logoutPage: LogoutPage;
};

export const test = baseTest.extend<POMFixture>({
  loginPage: async ({ page }, use) => {
    use(new LoginPage(page));
  },
  logoutPage: async ({ page }, use) => {
    use(new LogoutPage(page));
  },
});
