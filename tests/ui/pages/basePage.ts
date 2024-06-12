import { Locator, Page, expect } from "@playwright/test";

/**
 * A base class for all pages in the application.
 */
export default class BasePage {
  /**
   * The Playwright Page object.
   */
  readonly page: Page;

  /**
   * Creates a new instance of the BasePage class.
   * @param page - The Playwright Page object.
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to the specified URL.
   * @param url - The URL to navigate to.
   * @returns A Promise that resolves when the navigation is complete.
   */
  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  /**
   * Clicks on the specified element.
   * @param element - The element to click on.
   * @returns A Promise that resolves when the click is complete.
   */
  async clickElement(element: Locator) {
    await element.click();
  }

  /**
   * Fills the specified element with the given value.
   * @param element - The element to fill.
   * @param value - The value to fill the element with.
   * @returns A Promise that resolves when the filling is complete.
   */
  async fillElement(element: Locator, value: string) {
    await element.fill(value, { force: true });
  }

  /**
   * Gets the text content of the specified element.
   * @param element - The element to get the text from.
   * @returns A Promise that resolves with the text content of the element.
   */
  async getElementText(element: Locator): Promise<string> {
    return element.innerText();
  }

  /**
   * Waits for the specified selector to become visible.
   * @param selector - The selector to wait for.
   * @returns A Promise that resolves when the selector is visible.
   */
  async waitForElementVisible(selector: string) {
    await this.page.waitForSelector(selector, { state: "visible" });
  }

  /**
   * Waits for the specified selector to become hidden.
   * @param selector - The selector to wait for.
   * @returns A Promise that resolves when the selector is hidden.
   */
  async waitForElementHidden(selector: string) {
    await this.page.waitForSelector(selector, { state: "hidden" });
  }

  /**
   * Takes a screenshot and saves it with the specified file name.
   * @param fileName - The name of the file to save the screenshot as.
   * @returns A Promise that resolves when the screenshot is taken and saved.
   */
  async takeScreenshot(fileName: string) {
    await this.page.screenshot({ path: fileName });
  }

  /**
   * Verifies that the specified element is visible.
   * @param element - The element to verify.
   * @returns A Promise that resolves when the element is visible.
   */
  async verifyElementVisible(element: Locator) {
    await expect(element).toBeVisible();
  }

  /**
   * Verifies that the specified element is not visible.
   * @param element - The element to verify.
   * @returns A Promise that resolves when the element is not visible.
   */
  async verifyElementNotVisible(element: Locator) {
    await expect(element).not.toBeVisible();
  }

  /**
   * Enters the specified text sequentially into the specified element.
   * @param element - The element to enter the text into.
   * @param text - The text to enter.
   * @returns A Promise that resolves when the text is entered.
   */
  async enterTextSequentially(element: Locator, text: string) {
    await element.pressSequentially(text);
  }

  /**
   * Verifies that the specified element is disabled.
   * @param element - The element to verify.
   * @returns A Promise that resolves when the element is disabled.
   */
  async verifyElementDisabled(element: Locator) {
    await expect(element).toBeDisabled();
  }
}
