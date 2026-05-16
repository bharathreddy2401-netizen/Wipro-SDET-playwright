const {test,expect}=require("@playwright/test")

test("Login example",function({page}){
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await.page.getById("username").type("Hello");
    await.page.getById("password").type("akdjfy");

    await.page.getById("")
    await expect(page).toHaveTitle("ProtoCommerce");
})