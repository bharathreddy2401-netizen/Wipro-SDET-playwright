const {test,expect}=require("@playwright/test")

test("Login example", async function({page}){
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("#username").fill("rahulshettyacademy",{delay:3000});
    await page.locator("#password").fill("Learning@830$3mK2",{delay:3000});
    await page.locator('input[name="radio"]').nth(0).check();
   await page.getByRole('combobox').selectOption('stud');
    await page.locator("#terms").check();
    await page.locator("#signInBtn").click();
    await expect(page).toHaveTitle("ProtoCommerce");

    await page.waitForTimeout(5000);
})