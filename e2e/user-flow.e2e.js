// Todo: Add more test cases.
// Todo: Use mock data instead of network call.

describe('User Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it(
    'should be able search for "spy" keyword and find "Spy X Family" anime in the list ' +
      'and tap on it to view the details and adds it to favorites list and navigate back ' +
      'to go to favorites list and see the added item to unfavorite it',
    async () => {
      const keyword = 'Spy';
      const item = 'Spy x Family';

      await expect(element(by.id('tab-airing'))).toBeVisible();
      await expect(element(by.id('tab-complete'))).toBeVisible();
      await expect(element(by.id('tab-upcoming'))).toBeVisible();
      await expect(element(by.id('nav-menu'))).toBeVisible();
      await element(by.id('tab-complete')).tap();
      await element(by.id('input-search')).typeText(keyword);
      await expect(element(by.label('Spy x Family'))).toBeVisible();
      await element(by.id(item)).tap();
      await expect(element(by.id('nav-menu'))).not.toBeVisible();
      await expect(element(by.id('nav-fav'))).toBeVisible();
      await element(by.id('nav-fav')).tap();
      await expect(element(by.id('nav-back'))).toBeVisible();
      await element(by.id('nav-back')).tap();
      await element(by.id('nav-menu')).tap();
      await expect(element(by.label('Favorites'))).toBeVisible();
      await element(by.label('Favorites')).tap();
      await expect(element(by.id(item))).toBeVisible();
      await element(by.id(item)).tap();
      await expect(element(by.id('nav-fav'))).toBeVisible();
      await element(by.id('nav-fav')).tap();
      await element(by.id('nav-back')).tap();
      await expect(element(by.id(item))).not.toBeVisible();
      await element(by.id('nav-menu')).tap();
      await expect(element(by.label('Listing'))).toBeVisible();
      await element(by.label('Listing')).tap();
    },
  );
});
