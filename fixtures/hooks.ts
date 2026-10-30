import { test as baseTest } from "../fixtures/POMFixture";

type Hooks = {
  url: undefined;
  login: undefined;
  logout: undefined;
};

export const test = baseTest.extend<Hooks>({
  url: async ({ loginPage }, use) => {
    await loginPage.goToApplication();
    use(undefined);
  },

  login: async ({ loginPage }, use) => {
    use(undefined);
    await loginPage.clickLoginLink();
    await loginPage.enterUserCredentials(
      `${process.env.USER_NAME}`,
      `${process.env.PASSWORD}`,
    );
  },
  logout: async ({ logoutPage }, use) => {
    use(undefined);
    await logoutPage.clickOnLogoutLink();
  },
});
