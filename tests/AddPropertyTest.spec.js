
import { test } from "../Fixtures/test-fixture.js";


test.beforeEach("login",async({page,addproperty})=>
{
 await page.goto("https://keralaproperty.in/member/myhome/");  
 
   await addproperty.clickAddProperty();
})

test("fill all fields in add property",async({page,addproperty})=>
{
    addproperty.fillfields("abc");
    await page.waitForTimeout(2000);
})
