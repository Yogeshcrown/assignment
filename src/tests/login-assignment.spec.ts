import { expect, test } from '@playwright/test';

import 'dotenv/config';

import { LoginPage } from '../pages/LoginPage';

const validUsername = process.env.VALID_USERNAME;
const validPassword = process.env.VALID_PASSWORD;

const safeValidUsername = validUsername ?? '';
const safeValidPassword = validPassword ?? '';

test.describe('Practice Test Automation login assignment', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.expectPageLoaded();
  });

  test('logs in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(safeValidUsername, safeValidPassword);
    await loginPage.expectSuccessfulLogin();
  });

  test('shows an error for an invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('incorrectUser', safeValidPassword);
    await loginPage.expectErrorMessage(/Your username is invalid!/i);
    await loginPage.expectFieldsCleared();
    await expect(page).not.toHaveURL(/logged-in-successfully/);
  });

  test('shows an error for an invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(safeValidUsername, 'incorrectPassword');
    await loginPage.expectErrorMessage(/Your password is invalid!/i);
    await loginPage.expectFieldsCleared();
    await expect(page).not.toHaveURL(/logged-in-successfully/);
  });

  test('shows an error when the username is blank', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', safeValidPassword);
    await loginPage.expectErrorMessage(/Your username is invalid!/i);
    await loginPage.expectFieldsCleared();
    await expect(page).not.toHaveURL(/logged-in-successfully/);
  });

  test('shows an error when the password is blank', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(safeValidUsername, '');
    await loginPage.expectErrorMessage(/Your password is invalid!/i);
    await loginPage.expectFieldsCleared();
    await expect(page).not.toHaveURL(/logged-in-successfully/);
  });
});
