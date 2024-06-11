import { Locator, Page } from "playwright";
import BasePage from "./basePage";

/**
 * Represents the sign in page.
 */
export class SignInPage extends BasePage {
  /**
   * The page object.
   */
  readonly page: Page;

  /**
   * The email textbox locator.
   */
  private readonly emailTextbox: Locator;

  /**
   * The password textbox locator.
   */
  private readonly passwordTextbox: Locator;

  /**
   * The sign in button locator.
   */
  private readonly signInButton: Locator;

  /**
   * Constructs a new instance of SignInPage.
   * @param page The page object.
   */
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.emailTextbox = page.locator(`input[placeholder="Email"]`);
    this.passwordTextbox = page.locator(`input[placeholder="Password"]`);
    this.signInButton = page.locator(`button[class*="btn-primary"]`);
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
   * Clicks the sign in button.
   */
  async clickSignIn() {
    await this.clickElement(this.signInButton);
  }

  /**
   * Signs in a user with the given email and password.
   * @param email The email.
   * @param password The password.
   */
  async signIn(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignIn();
  }
}
