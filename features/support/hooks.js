import { Before, After, setDefaultTimeout,AfterStep } from '@cucumber/cucumber';

setDefaultTimeout(30 * 1000);

Before(async function(){
    await this.init()
});
After(async function(){
    await this.close();
    
})


AfterStep(async function ({ result }) {

  if (result.status === 'FAILED') {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, 'image/png');
  }
});