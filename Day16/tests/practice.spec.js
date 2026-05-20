import {test,expect} from '@playwright/test';

test("Login page test",async({page})=>{
    await page.goto("https://automationexercise.com/login");
    const username=page.getByPlaceholder("Name");
    const email=page.getByRole("textbox",{name:"Email Address"}).nth(1);
    await username.fill("Rahul");
    await email.fill("Rahul2@gmail.com");

    const btn=page.getByRole("button", {name:"Signup"});
    await btn.click();
    const title1=page.locator(".title.text-center").nth(0);
    await expect(title1).toHaveText("Enter Account Information");
});