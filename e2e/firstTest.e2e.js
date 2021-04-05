const { reloadApp } = require('detox-expo-helpers');

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await reloadApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('tabTitleOne'))).toBeVisible();
  });
});
