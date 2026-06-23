const{test,expect}=require("@playwright/test")

test("valid login",async function({page})
{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

// Expect a title "to contain" a substring.
   await expect(page).toHaveTitle(/OrangeHRM/);
  await page.waitForTimeout(5000);
  //test.use({ locale: 'en-US' });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.waitForTimeout(5000);
})










/*import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Expect a title "to contain" a substring.
   await expect(page).toHaveTitle(/OrangeHRM/);
  
});

 test('Valid login', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
});
  */