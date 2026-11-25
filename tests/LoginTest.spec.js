import { test ,expect} from "../Fixtures/test-fixture.js";

test.beforeEach("login with valid data",async({page})=>
{
 await page.goto("https://keralaproperty.in/member/myhome/");
 await page.waitForTimeout(2000);
})

test("title verification",async({page})=>
{
  await page.waitForTimeout(2000); 
   await expect(page).toHaveTitle("Kerala Real Estate Website | Kerala Property")
})

 