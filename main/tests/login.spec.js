import { expect } from "@playwright/test";
import { test } from "../setup.js";
import { LoginPage } from "../pages/loginPage.js";

test.describe("Login Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("Login with valid information", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("admin@uams.edu.vn", "123456");
    await expect(page).toHaveURL(/studentContact\?page=1/);
  });

  test("Login with incorrect password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("admin@uams.edu.vn", "wrongpassword");
    await expect(page.locator(loginPage.toastContainer)).toBeVisible();
    const errorToast = await loginPage.getErrorToast();
    await expect(errorToast).toBeVisible();
    await expect(errorToast).toHaveText("Đăng nhập thất bại.");
  });

  //   test("Login with incorrect email", async ({ page }) => {
  //     const loginPage = new LoginPage(page);
  //     await loginPage.login("wronguser@uams.edu.vn", "123456");
  //     await expect(loginPage.errorMessage).toBeVisible();
  //   });

  //   test("Login with empty fields", async ({ page }) => {
  //     const loginPage = new LoginPage(page);
  //     await loginPage.login("", "");
  //     await expect(loginPage.errorMessage).toBeVisible();
  //   });

  //   test("Login with special characters in credentials", async ({ page }) => {
  //     const loginPage = new LoginPage(page);
  //     await loginPage.login("admin@uams.edu.vn<>", "123<>");
  //     await expect(loginPage.errorMessage).toBeVisible();
  //   });

  //   test("Submit button should be disabled if fields are empty", async ({
  //     page,
  //   }) => {
  //     const loginPage = new LoginPage(page);
  //     await expect(loginPage.submitButton).toBeDisabled();
  //   });

  //   test("Password input should be masked", async ({ page }) => {
  //     const loginPage = new LoginPage(page);
  //     await expect(loginPage.passwordInput).toHaveAttribute("type", "password");
  //   });

  //   test("User should be redirected to login page after logout", async ({
  //     page,
  //   }) => {
  //     const loginPage = new LoginPage(page);
  //     await loginPage.login("admin@uams.edu.vn", "123456");
  //     await expect(page).toHaveURL(/studentContact\?page=1/);

  //     await loginPage.logout(); // Giả sử LoginPage có phương thức logout()
  //     await expect(page).toHaveURL(loginPage.url);
  //   });
});
