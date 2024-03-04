import { createPlaywrightRouter } from 'crawlee';
import { KeyValueStore } from 'crawlee';
import { once } from 'events';

export const router = createPlaywrightRouter();

router.addDefaultHandler(async ({ page, log }) => {
    log.info(`enqueueing new URLs`);
    // await page.waitForSelector('.close a');
    await page.screenshot({ path: 'screenshotstart.png' });

    // await page.locator('//*[@id="webklipper-publisher-widget-container-notification-close-div"]').click();
    // await page.locator('//*[@id="webklipper-publisher-widget-container-notification-close-div"]').click();
    // await page.waitForTimeout(5000);
    // class="page-section sticky-scroll topSection appendBottom40"
    // xyz.click();
    // await page.screenshot({ path: 'screenshotFrom.png' });

    log.info('fetched btn');
    log.info("clicking...")

    // await page.waitForSelector('#second-img')
    // await page.locator('//*[@id="top-banner"]/div[2]/div/div/div/div[2]/div[1]/div[1]')
    // const banner = await page.waitForSelector('//*[@id="top-banner"]/div[2]')
    await page.waitForTimeout(1000);
    // .click();
    await  page.mouse.click(100, 200)
    // await page.waitForTimeout(1000);
console.log('done');

    await page.waitForTimeout(1000);

    await page.locator('//*[@id="top-banner"]/div[2]/div/div/div/div[2]/div[1]/div[1]').click();
    await page.getByPlaceholder('From').fill('AMD');
    console.log('done2');
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown')
    // await page.keyboard.press('Enter')

    await page.keyboard.press('Tab')
    await page.getByPlaceholder('To').fill('DXB');
    await page.waitForTimeout(1000);

    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    // await page.locator('//*[@id="react-autowhatever-1-section-0-item-0"]/div/div[1]/p[1]').click();
    await page.locator('//*[@id="top-banner"]/div[2]/div/div/div/div[2]/div[1]/div[3]/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div[3]/div[3]/div[6]/div').click()
    await page.locator('//*[@id="top-banner"]/div[2]/div/div/div/div[2]/p/a').click()
    await page.waitForTimeout(5000);
    await  page.mouse.click(100, 200)
    await page.waitForTimeout(15000);
    await page.keyboard.down('End').then(()=>{
        console.log("donescroll");
        
    });


    
    
    const categoryTexts = await page.$$eval('.airlineName', (els) => {
        // Extract text content from the actor cards
        return els.map((el) => el.textContent);
    });
    categoryTexts.forEach((text, i) => {
        console.log(`Airline: ${i + 1}: ${text}\n`);
    });    
    //*[@id="listing-id"]/div/div[2]/div/div[1]/div[1]/div[2]/div[1]/div[1]/div
    //*[@id="listing-id"]/div/div[2]/div/div[2]/div[1]/div[2]/div[1]/div[1]/div
    await page.screenshot({ path: 'screenshotFrom2.png' });
    // await page.getByText('DEL', { exact: true }).click();
    // await page.getByPlaceholder('To').fill('BOM')
    // await page.screenshot({ path: 'screenshotend.png' });

});


