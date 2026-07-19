# Functional Test Cases for Login Assignment

## Positive test cases

1. Successful login with valid username and password
2. Successful navigation to the success page after valid credentials
3. Login form remains usable after a successful attempt
4. The success page displays a success message and logout option
5. The login page loads correctly with the expected form fields

## Negative test cases

1. Login with an invalid username
2. Login with an invalid password
3. Login with a blank username
4. Login with a blank password
5. Login with both fields empty

## Automated coverage

The current Playwright suite automates these scenarios:

- Valid credentials login
- Invalid username
- Invalid password
- Blank username
- Blank password
