import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import testData from '../fixtures/testData.json' with { type: 'json' };


test.describe("OrangeHRM Login Tests", ()=>{
    testData.forEach((data,index) => {
        test(`Login Test ${index + 1} - ${data.expected}`, async ({page}) => {

            const loginPage = new LoginPage(page);
            await loginPage.navigate()
            await loginPage.login(data.username, data.password);
            await loginPage.clickLogin()
            if(data.expected ==='success'){
                await loginPage.isDashboardVisible()
            }else{
                const error = await loginPage.getErrorMessage()
                expect(error.toLowerCase()).toContain(data.expected.toLowerCase());
            }
        });
    });

});
