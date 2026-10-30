import { test } from "@playwright/test";

test("app1", async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/autoplay");
});

test("app2", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
});

test("app3", async ({ page }) => {
  await page.goto("https://www.google.com/");
});
