import { test } from "@playwright/test";

test("app4", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
});

test("app5", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test("app6", async ({ page }) => {
  await page.goto(
    "https://www.naukri.com/nlogin/login?URL=https://www.naukri.com/mnjuser/homepage",
  );
});
