let page;
 
beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
   page.close();
});

describe("Github page tests", () => {
beforeEach(async () => {
  await page.goto("https://github.com/team");
});

   test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub · Build and ship software on a single, collaborative platform · GitHub");
  }, 75000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 30000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 30000);
});

test("The h1 header content AI that builds with you", async () => {
  const expected = "AI that builds with you";
  await page.goto("https://github.com/features/copilot");
const actual = await page.$eval('#hero-section-brand-heading', (link) => link.textContent);
expect(actual).toContain(expected);
}, 30000);

test("The h1 header content Take flight with GitHub Copilot", async () => {
  const expected = "Take flight with GitHub Copilot";
  await page.goto("https://github.com/features/copilot/plans?cft=copilot_li.features_copilot");
const actual = await page.$eval('#hero-section-brand-heading', (link) => link.textContent);
expect(actual).toContain(expected);
}, 30000);

test("The h1 header content Build what’s next with GitHub Copilot", async () => {
  const expected = "Build what’s next with GitHub  Copilot";
  await page.goto("https://github.com/features/copilot/copilot-business");
const actual = await page.$eval('#hero-section-brand-heading', (link) => link.textContent);
expect(actual).toContain(expected);
}, 30000);