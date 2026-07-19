import process from 'process';

import { expect, type Locator, type Page } from '@playwright/test';
import 'dotenv/config';

export class LoginPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('#login h2');
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
    this.errorMessage = page.locator('#error');
    this.logoutLink = page.getByText(/log out/i);
  }

  async open() {
    const baseUrl = process.env.BASE_URL;
    const safeBaseUrl = baseUrl ?? '';

    await this.page.goto(safeBaseUrl, {
      waitUntil: 'domcontentloaded',
    });
  }

  async expectPageLoaded() {
    await expect(this.page).toHaveTitle(/Test Login/);
    await expect(this.heading).toContainText('Test login');
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async expectSuccessfulLogin() {
    await expect(this.page).toHaveURL(/logged-in-successfully/);
    await expect(this.page.locator('body')).toContainText(
      /Congratulations|successfully logged in/i,
    );
    await expect(this.logoutLink).toBeVisible();
  }

  async expectErrorMessage(message: string | RegExp) {
    await expect(this.errorMessage).toContainText(message);
  }

  async expectFieldsCleared() {
    await expect(this.usernameInput).toHaveValue('');
    await expect(this.passwordInput).toHaveValue('');
  }
}
