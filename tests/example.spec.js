// @ts-check
const { test, expect } = require('../fixtures/simpleFixtureUsingBrowser.js');

test('test fixtureA', async ({fixtureA,page}) => {
  const {a,b} = fixtureA;
  await page.goto("https://bing.com/");
  let search_box = page.getByPlaceholder('Search the web');
  await expect(search_box).toBeVisible({timeout:10_000});
  await search_box.click();
  await search_box.fill(a+b);
  await expect(page.getByRole('link', { name: 'Docz' })).toBeVisible();
});

test('test fixtureB', async ({fixtureB,page}) => {

  await page.goto("https://www.microsoft.com/");
  await expect(page.getByRole('link', { name: 'CommunityTEST' })).toBeVisible();
});
