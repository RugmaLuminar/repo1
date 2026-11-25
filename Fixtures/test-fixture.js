import { test as base } from "@playwright/test";

import { Loginpage } from '../page/Loginpage';
import { Homepage } from '../page/Homepage';
import {AddPropertypage} from '../page/AddPropertypage';



export const test = base.extend({

    login: async ({ page }, use) => {

        const login = new Loginpage(page);

        await use(login);
    },


    home: async ({ page }, use) => {

        const home = new Homepage(page);

        await use(home);
    },


    addproperty: async ({ page }, use) => {

        const addproperty = new AddPropertypage(page);

        await use(addproperty);
    },

    

    

});


export { expect } from "@playwright/test";