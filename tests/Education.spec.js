  const { test, expect } = require('@playwright/test');
   test('All Page', async ({ page }) => {

   // Login
  await page.goto('http://pgsql_associate.proanto.com/Home/Index');
  await expect(page.locator('//*[@id="body"]/section/div/div[2]/div')).toBeVisible();
  await page.locator('//input[@id="UserName"]').fill('YMI000151955');
  await page.locator('//input[@id="Password"]').fill('YMI000151955');
  await page.locator('//button[@id="sign"]').click();

   //dashboard
   await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
   await page.getByRole('link', { name: 'Dashboard' }).click();

   // Go to My Profile
  await expect(page.getByRole('link', { name: 'My Profile' })).toBeVisible();
  await page.getByRole('link', { name: 'My Profile' }).click();

   //My Profile page should be visible
  await expect(page.locator('//*[@id="main-wrapper"]/div[2]')).toBeVisible()
  await page.locator('//button[@data-target="#changePasswordModal"]').click()

    // Open Change Password modal
   await page.locator('//*[@id="main-wrapper"]/div[2]/div[2]/div/div/div/div[2]/div/div[1]/div       [2]/div/div/div/div/div/button').click();
   await expect(page.locator('//*[@id="changePasswordModal"]/div/div')).toBeVisible();
   await page.locator('//*[@id="changePasswordModal"]/div/div/div[1]/button/i').click();
  
   /*//Change Password
  await page.locator('//input[@name="newPassword"]').fill('Rani50522')
  await page.locator('//input[@name="confirmPassword"]').fill('Rani50522')
  await page.locator('//button[@onclick="ChangePassword();"]').click()
  await expect(page.getByText(/password change successfully/i)).toBeVisible({ timeout: 5000 });
  await expect(page.locator('//*[@id="main-wrapper"]/div[2]')).toBeVisible()*/

   // Go to My KYC
  await page.locator('//*[@id="sidebarnav"]/li[4]/a').click();
  await page.waitForLoadState('networkidle');
  await expect(page.locator('//*[@id="main-wrapper"]/div[2]/div[2]')).toBeVisible();
   // Validate all the headines
   await expect(page.locator('//*[@id="accordion"]')).toBeVisible();

  // Click Edit
  await page.locator('//*[@id="accordion"]/div[1]/div[1]/div/div[2]/span[1]/small').click();
  await expect(page.locator('//span[@onclick="ViewPersonal()"]')).toBeVisible();
  await expect(page.locator('//*[@id="PersonalDetailForm"]/div')).toBeVisible();

  // Validate all the form with same functionality
   await expect(page.locator('//*[@id="accordion"]')).toBeVisible();

   // Click Work / Employment tab (2nd tab)/Go to the work
   await page.locator('//*[@id="main-wrapper"]/div[2]/div[2]/ul/li[2]/a').click();
   await expect(page.locator('#collapseone')).toBeVisible();
   await page.locator('//*[@id="accordion"]/div[1]/div[1]/div/div[2]/span[2]').click();
   await expect(page.locator('#DivCurrentEmployer')).toBeVisible();
   await expect(page.locator('//*[@id="accordion"]/div[1]/div[1]/div/div[2]/span[2]')).toBeVisible();
   await expect(page.locator('#accordion')).toBeVisible();
   });
   //Go to the work experience
   //await page.locator('')
 