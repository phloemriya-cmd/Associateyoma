const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {
  await page.goto('https://associates.yoma.co.in/Home/Index');

  await page.locator("//input[@id='UserName']").fill('YMI000050522');
  await page.locator("//input[@id='Password']").fill('YMI000050522');
  await page.locator('//button[@id="sign"]').click();

  //dashboard
  await expect(page.locator("//div[contains(@class,'page-wrapper')]//div[contains(@class,'container-fluid')]")).toBeVisible();
  await page.locator('//body').click()
  



  
});


