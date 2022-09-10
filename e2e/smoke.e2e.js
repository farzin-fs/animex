describe('Smoke Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should open drawer', async () => {
    await expect(element(by.id('nav-menu'))).toBeVisible();
    await element(by.id('nav-menu')).tap();
  });
});
