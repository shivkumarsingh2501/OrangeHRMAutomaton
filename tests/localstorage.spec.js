import { test, expect } from '@playwright/test';

test('Login using localStorage', async ({ page }) => {

    await page.addInitScript(() => {

        localStorage.setItem(
            'auth_token',
            'dummyToken'
        );

    });

    await page.goto(
        'https://opensource-demo.orangehrmlive.com'
    );

});