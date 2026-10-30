import { test } from "../fixtures/hooks";

test("Temp Test", async ({ page, loginPage }) => {
  await loginPage.goToApplication();
  await loginPage.clickLoginLink();
  await loginPage.enterUserCredentials(
    `${process.env.USER_NAME}`,
    `${process.env.PASSWORD}`,
  );

  await page.context().storageState({ path: "./playwright/.auth/auth.json" });
});
