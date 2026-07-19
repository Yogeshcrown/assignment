# Playwright Login Assignment

This project automates the login flow for the Practice Test Automation login page using Playwright with TypeScript.

## What is covered

- Positive test: successful login with valid credentials
- Negative tests:
  - invalid username
  - invalid password
  - blank username
  - blank password

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```
3. Create a local environment file:
   ```bash
   cp .env.example .env
   ```
   Update the values in .env if needed.

## Run the tests

Run all tests:

```bash
npx playwright test
```

Run the assignment suite only:

```bash
npx playwright test src/tests/login-assignment.spec.ts
```

Run in headed mode for visual debugging:

```bash
npx playwright test src/tests/login-assignment.spec.ts --headed
```

## Test report

After execution, a report is generated in the Playwright report folder:

```bash
npx playwright show-report
```

## Maintain the project with ESLint and Prettier

This project also uses ESLint and Prettier to keep the codebase clean, consistent, and easier to maintain.

Run lint checks:

```bash
npm run lint
```

Automatically fix lint issues:

```bash
npm run lint:fix
```

Format the project files:

```bash
npm run format
```

## Additional work for a long-term scalable project

This project is already structured to support future growth. The current setup lays the foundation for a more maintainable and scalable automation framework by:

- separating test logic from page interactions using a page object model
- keeping test data in a configurable environment file with .env support
- making the suite easier to extend for additional scenarios and pages
- improving readability and reusability for future test additions
