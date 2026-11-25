export class AddPropertypage
{

    constructor(page)
    {
        this.page=page;
        this.addpropertylink=page.getByRole('link', { name: 'Add Property' })
        this.propertylabelfield=page.locator('#proplabel');
    }

  async clickAddProperty()
  {
    await this.addpropertylink.click();
  }

  async fillfields(proplabel)
  {
    this.propertylabelfield.fill(proplabel);
  }

}

