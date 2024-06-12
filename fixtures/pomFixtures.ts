import { Page, test as baseTest } from "@playwright/test";
import { SignUpPage } from "../tests/ui/pages/signUpPage";
import { SignInPage } from "../tests/ui/pages/signInPage";
import { HomePage } from "../tests/ui/pages/homePage";
import { NewArticlePage } from "../tests/ui/pages/newArticlePage";

/**
 * The type of the pages that can be used in the tests.
 */
type pages = {
  /**
   * The page object for the sign up page.
   */
  signUpPage: SignUpPage;
  /**
   * The page object for the sign in page.
   */
  signInPage: SignInPage;
  /**
   * The page object for the home page.
   */
  homePage: HomePage;
  /**
   * The page object for the new article page.
   */
  newArticlePage: NewArticlePage;
};

const testPages = baseTest.extend<pages>({
  /**
   * Initializes the page objects.
   *
   * @param {Page} page - The page object.
   * @param {(page: SignUpPage) => Promise<void>} use - The use function.
   */
  signUpPage: async (
    { page }: { page: Page },
    use: (page: SignUpPage) => Promise<void>
  ) => {
    await use(new SignUpPage(page));
  },
  /**
   * Initializes the sign in page.
   *
   * @param {Page} page - The page object.
   * @param {(page: SignInPage) => Promise<void>} use - The use function.
   */
  signInPage: async (
    { page }: { page: Page },
    use: (page: SignInPage) => Promise<void>
  ) => {
    await use(new SignInPage(page));
  },
  /**
   * Initializes the home page.
   *
   * @param {Page} page - The page object.
   * @param {(page: HomePage) => Promise<void>} use - The use function.
   */
  homePage: async (
    { page }: { page: Page },
    use: (page: HomePage) => Promise<void>
  ) => {
    // Instantiate the HomePage object with the page object
    await use(new HomePage(page));
  },
  /**
   * Initializes the new article page.
   *
   * @param {Page} page - The page object.
   * @param {(page: NewArticlePage) => Promise<void>} use - The use function.
   */
  newArticlePage: async (
    { page }: { page: Page },
    use: (page: NewArticlePage) => Promise<void>
  ) => {
    await use(new NewArticlePage(page));
  },
});

export const test = testPages;
export const expect = testPages.expect;
