import { BasePage } from "./basePage.js";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = "https://itams01.deha.vn:8090/login";
    this.usernameInput = "input[name='email']";
    this.passwordInput = "input[name='password']";
    this.submitButton = "button[type='submit']";
    this.toastContainer = ".Toastify";
    this.errorToast = ".Toastify__toast--error";
    this.logoutButton = ".logout-button";
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }

  async getErrorToast() {
    return this.page.locator(`${this.toastContainer} ${this.errorToast}`);
  }
}
