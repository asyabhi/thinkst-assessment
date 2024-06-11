import { test, expect } from "../../fixtures/pomFixtures";

test.describe("Conduit Test", () => {
  test.beforeEach(async ({ page, homePage, signInPage }) => {
    if (process.env.URL) {
      await page.goto(process.env.URL);
    } else {
      console.error("URL is not defined in the environment variables.");
    }
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("User should log in successfully", async ({ homePage, signInPage }) => {
    await homePage.clickSignInButton();
    if (process.env.EMAIL && process.env.PASSWORD) {
      await signInPage.fillEmail(process.env.EMAIL);
      await signInPage.fillPassword(process.env.PASSWORD);
    } else {
      console.error(
        "Login Credentials are not defined in the environment variables."
      );
      await signInPage.clickSignIn();
      expect(await homePage.getPageTitle()).toContain("Conduit");
    }
  });

  test("User should not be able to sign up with existing username", async ({
    homePage,
    signUpPage,
  }) => {
    await homePage.clickSignUpButton();
    if (process.env.USERNAME && process.env.EMAIL && process.env.PASSWORD) {
      await signUpPage.signUpUser(
        process.env.USERNAME,
        process.env.EMAIL,
        process.env.PASSWORD
      );
    } else {
      console.error(
        "Signup Credentials are not defined in the environment variables."
      );
      await signUpPage.clickSignUp();
      expect(await signUpPage.verifyErrorMessagePresent()).toBeTruthy();
    }
  });
});
