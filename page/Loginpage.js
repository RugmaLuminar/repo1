export class Loginpage
{
    constructor(page)
    {
        this.page=page;
        this.usernamefield=page.locator('#ulogin');
        this.passwordfield=page.locator('#upass');
        this.loginbutton=page.getByRole('button', { name: 'Login' });
    }

async setValues(un,pswd)
{
    await this.usernamefield.fill(un);
    await this.passwordfield.fill(pswd);
    

}
async loginClick()
{
await this.loginbutton.click();
}



}
