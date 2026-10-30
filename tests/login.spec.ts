import { test } from "../fixtures/hooks";

test.skip("Login Test", async ({ page, loginPage }) => {
  await loginPage.goToApplication();
});
