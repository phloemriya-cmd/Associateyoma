const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {
  await page.goto('https://associates.yoma.co.in/Home/Index');

  await page.locator("//input[@id='UserName']").fill('YMI000050522');
  await page.locator("//input[@id='Password']").fill('YMI000050522');
  await page.locator('//button[@id="sign"]').click();
  await page.locator("//span[normalize-space()='My Profile']").click()
  await expect(page.locator("//h3[normalize-space()='Rani']")).toBeVisible()
  await expect(page.locator("//a[@class='text-muted']")).toBeVisible()
  await expect(page.locator("//h5[normalize-space()='My Detail']")).toBeVisible()
  


});