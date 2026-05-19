/*import { test, expect } from '@playwright/test';

test("Booking site test",async ({page})=>
{
    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByPlaceholder("you@email.com").fill("virat@gmail.com");
    await page.getByPlaceholder("••••••").fill("Virat@123");
    await page.getByRole("button", {name:"Sign In"}).click();
    await expect(page.url()).toBe("https://eventhub.rahulshettyacademy.com/");
});*/

import { test, expect } from "@playwright/test";

test("snapdeal Test", async ({ page }) => {
    // 1. Navigate to Snapdeal
    await page.goto("https://www.snapdeal.com/");

    // 2. Locate the search input, fill it, and press 'Enter' to execute the search
    const searchInput = page.locator("#keyword"); 
    await searchInput.fill("iphone 15");
    await searchInput.press("Enter");

    // Alternatively, you can click the search button instead of pressing Enter:
    // await page.locator(".searchformButton").click();

    // 3. Wait for the network/URL to update and assert using a partial match (regex)
    await expect(page).toHaveURL(/.*keyword=iphone%2015.*/);
});
