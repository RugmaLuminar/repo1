export class Homepage{

constructor(page)
{
    this.page=page;
    this.properties=page.getByRole('heading', { name: 'My Properties' })
    this.option=page.locator("ul.navMyaccount > li")
    
}

async optiondetails()
{
    //this.option.count();
    console.log(await this.option.count());
    
}

async textVerification()
{
    return await this.properties.textContent();
}

}
