// what is this file is all about // its job is to act as a bridge between your sensitive environment variables and your 
// actual automation code .
// what is this file centrailze data : if your url change you ronly update it in one place (.env)
// security : it keep sensitive information out of your scorce code
// readability : it exports a clean javascript object that other file 


import dotenv from 'dotenv';

dotenv.config();

export const config = {
    baseUrl: process.env.BASE_URL || process.env.Base_URL || process.env.baseUrl || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    username: process.env.USERNMAE || process.env.ORANGEHRM_USERNAME || process.env.username || 'Admin',
    password: process.env.PASSWORD || process.env.password || 'admin123',
    headless: process.env.HEADLESS !== 'false',
};
