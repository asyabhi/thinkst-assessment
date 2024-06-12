import { Locator, Page } from "playwright";
import BasePage from "./basePage";

/**
 * Represents the sign up page.
 */
export class SignUpPage extends BasePage {
  /**
   * The page object.
   */
  readonly page: Page;

  /**
   * The username textbox locator.
   */
  private readonly usernameTextbox: Locator;

  /**
   * The email textbox locator.
   */
  private readonly emailTextbox: Locator;

  /**
   * The password textbox locator.
   */
  private readonly passwordTextbox: Locator;

  /**
   * The sign up button locator.
   */
  private readonly signUpButton: Locator;

  /**
   * The error message locator.
   */
  private readonly errorMessage: Locator;

  /**
   * Constructs a new instance of SignUpPage.
   * @param page The page object.
   */
  constructor(page: Page) {
    super(page);
    this.page = page; // Add this line to initialize the 'page' property
    this.usernameTextbox = page.locator(`input[placeholder="Username"]`);
    this.emailTextbox = page.locator(`input[placeholder="Email"]`);
    this.passwordTextbox = page.locator(`input[placeholder="Password"]`);
    this.signUpButton = page.locator(`button[class*="btn-primary"]`);
    this.errorMessage = page.locator(`.error-messages`);
  }

  /**
   * Fills the username textbox with the given value.
   * @param username The username value.
   */
  async fillUsername(username: string) {
    await this.fillElement(this.usernameTextbox, username);
  }

  /**
   * Fills the email textbox with the given value.
   * @param email The email value.
   */
  async fillEmail(email: string) {
    await this.fillElement(this.emailTextbox, email);
  }

  /**
   * Fills the password textbox with the given value.
   * @param password The password value.
   */
  async fillPassword(password: string) {
    await this.fillElement(this.passwordTextbox, password);
  }

  /**
   * Clicks the sign up button.
   */
  async clickSignUp() {
    await this.clickElement(this.signUpButton);
  }

  /**
   * Signs up a user with the given username, email, and password.
   * @param username The username.
   * @param email The email.
   * @param password The password.
   */
  async signUpUser(username: string, email: string, password: string) {
    await this.fillUsername(username);
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignUp();
  }

  /**
   * Verifies if the error message is present.
   * @returns Promise that resolves when the error message is visible.
   */
  async verifyErrorMessagePresent() {
    await this.verifyElementVisible(this.errorMessage);
  }
}
