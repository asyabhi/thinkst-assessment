import { Locator, Page, expect } from "@playwright/test";

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async clickElement(element: Locator) {
    await element.click();
  }

  async fillElement(element: Locator, value: string) {
    await element.fill(value, { force: true });
  }

  async getElementText(element: Locator): Promise<string> {
    return element.innerText();
  }

  async waitForElementVisible(selector: string) {
    await this.page.waitForSelector(selector, { state: "visible" });
  }

  async waitForElementHidden(selector: string) {
    await this.page.waitForSelector(selector, { state: "hidden" });
  }

  async takeScreenshot(fileName: string) {
    await this.page.screenshot({ path: fileName });
  }

  async verifyElementVisible(element: Locator) {
    await expect(element).toBeVisible();
  }

  async verifyElementNotVisible(element: Locator) {
    await expect(element).not.toBeVisible();
  }

  async enterTextSequentially(element: Locator, text: string) {
    await element.pressSequentially(text);
  }

  async verifyElementDisabled(element: Locator) {
    await expect(element).toBeDisabled();
  }
}
