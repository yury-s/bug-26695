//in fixtures/simpleFixtureUsingBrowser.js
const base = require('@playwright/test');

exports.test = base.test.extend({

  fixtureA: async ({ browser }, use) => {

    // OPEN NEW BROWSER
    const page = await browser.newPage();
    // Open page
    await page.goto("https://playwright.dev/");
    let the_heading = page.getByRole('heading', { name: 'Playwright enables reliable end-to-end testing for modern web apps.' });
    await base.expect(the_heading).toBeVisible({timeout:15_000});
    let a="a";
    let b="b";
    await page.close();
    use({a,b});
  },
  fixtureB: [async ({fixtureA,page},use) => {
    await page.goto("https://github.com/");
    let search_box = page.getByRole('button', { name: 'Search or jump to...' });
    await base.expect(search_box).toBeVisible({timeout:15_000});
    use(page);
  },{ timeout: 60_000 }]

});

exports.expect = base.expect;