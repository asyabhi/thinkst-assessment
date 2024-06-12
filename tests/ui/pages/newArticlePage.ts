import { Locator, Page } from "@playwright/test";
import BasePage from "../pages/basePage";

/**
 * Represents the new article page.
 */
export class NewArticlePage extends BasePage {
  /**
   * The page object.
   */
  readonly page: Page;
  /**
   * The article title textbox.
   */
  private readonly articleTitleTextbox: Locator;
  /**
   * The article description textbox.
   */
  private readonly articleDescriptionTextbox: Locator;
  /**
   * The article body textbox.
   */
  private readonly articleBodyTextbox: Locator;
  /**
   * The tags textbox.
   */
  private readonly tagsTextbox: Locator;
  /**
   * The publish button.
   */
  private readonly publishButton: Locator;
  /**
   * The delete article button.
   */
  private readonly deleteArticleButton: Locator;

  /**
   * Constructs a new instance of NewArticlePage.
   * @param page The page object.
   */
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.articleTitleTextbox = page.locator(
      `input[placeholder="Article Title"]`
    );
    this.articleDescriptionTextbox = page.locator(
      `input[placeholder="What's this article about?"]`
    );
    this.articleBodyTextbox = page.locator(
      `textarea[placeholder="Write your article (in markdown)"]`
    );
    this.tagsTextbox = page.locator(`input[placeholder="Enter tags"]`);
    this.publishButton = page.locator(`button[type="submit"]`);
    this.deleteArticleButton = page.locator(`.btn-outline-danger`);
  }

  /**
   * Fills the article title textbox with the given value.
   * @param articleTitle The article title value.
   */
  async fillArticleTitle(articleTitle: string) {
    await this.articleTitleTextbox.fill(articleTitle);
  }

  /**
   * Fills the article description textbox with the given value.
   * @param articleDescription The article description value.
   */
  async fillArticleDescription(articleDescription: string) {
    await this.articleDescriptionTextbox.fill(articleDescription);
  }

  /**
   * Fills the article body textbox with the given value.
   * @param articleBody The article body value.
   */
  async fillArticleBody(articleBody: string) {
    await this.articleBodyTextbox.fill(articleBody);
  }

  /**
   * Fills the tags textbox with the given value.
   * @param tags The tags value.
   */
  async fillTags(tags: string) {
    await this.tagsTextbox.fill(tags);
  }

  /**
   * Clicks the publish button.
   */
  async clickPublishButton() {
    await this.publishButton.click();
  }

  /**
   * Publishes an article with the given title, description, body, and tags (optional).
   * @param title The title of the article.
   * @param description The description of the article.
   * @param body The body of the article.
   * @param tags The tags of the article.
   */
  async publishArticle(
    title: string,
    description: string,
    body: string,
    tags?: string[]
  ) {
    await this.fillArticleTitle(title);
    await this.fillArticleDescription(description);
    await this.fillArticleBody(body);

    if (tags) {
      for (const tag of tags) {
        await this.fillTags(tag);
        await this.fillTags("Enter");
      }
    }

    await this.clickPublishButton();
  }

  /**
   * Verifies if the delete button is not visible.
   * @returns Promise that resolves when the delete button is not visible.
   */
  async verifyDeleteButtonNotVisible() {
    await this.verifyElementNotVisible(this.deleteArticleButton);
  }
}
