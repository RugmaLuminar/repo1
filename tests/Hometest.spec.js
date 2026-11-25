import { test,expect } from "../Fixtures/test-fixture.js";


test.beforeEach("login",async({page})=>
{
 await page.goto("https://keralaproperty.in/member/myhome/");


})


test("Home",async({page,home})=>
{
    await page.waitForTimeout(2000);
  await home.optiondetails();
   
})
test("PropertytextVerification",async({page,home})=>
{
  let text=await home.textVerification();
 expect(text).toContain("My Properties")
   //home.myAccountclick();
   await page.waitForTimeout(3000);
})

