import { test as base } from "@playwright/test";

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto(process.env.BASE_URL);
    await use(page);
  },
});
