import { Locator, Page } from "@playwright/test";
import BasePage from "../pages/basePage";

/**
 * Represents the home page.
 */
export class HomePage extends BasePage {
  /**
   * The page object.
   */
  readonly page: Page;

  /**
   * The new article button locator.
   */
  private readonly newArticleButton: Locator;
  private readonly signInButton: Locator;
  private readonly signUpButton: Locator;

  /**
   * Constructs a new instance of HomePage.
   * @param page The page object.
   */
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.newArticleButton = page.locator(`a[href="#/editor"]`);
    this.signInButton = page.locator(`a[href="#/login"]`);
    this.signUpButton = page.locator(`a[href="#/register"]`);
  }

  /**
   * Clicks the new article button.
   */
  async clickNewArticleButton() {
    await this.newArticleButton.click();
  }

  /**
   * Clicks the sign in button.
   */
  async clickSignInButton() {
    await this.signInButton.click();
  }

  /**
   * Clicks the sign up button.
   */
  async clickSignUpButton() {
    await this.signUpButton.click();
  }

  /**
   * Retrieves the title of the page.
   *
   * @return {Promise<string>} The title of the page.
   */
  async getPageTitle() {
    // Retrieve the title of the page using the page object.
    return await this.page.title();
  }

  /**
   * Verifies that the new article button is not visible.
   */
  async verifyNewArticleButtonVisible() {
    await this.verifyElementNotVisible(this.newArticleButton);
  }
}
