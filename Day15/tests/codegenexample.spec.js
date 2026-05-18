import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('link', { name: 'Image True Wireless Min. 50%' }).click();
  await page.getByText('4★ & above').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Mivi DuoPods Blaze [New launch], AI-ENC, 60 Hrs, 13mm Drivers, Fast Charging,' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Image', exact: true }).nth(3).click();
  const ans=await page1.getByText('Fast Charging Support');
  
});