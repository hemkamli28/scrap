import { createPlaywrightRouter } from 'crawlee';
import { KeyValueStore } from 'crawlee';
import { once } from 'events';

export const router = createPlaywrightRouter();

router.addDefaultHandler(async ({ page, log }) => {
    log.info(`enqueueing new URLs`);
    
    log.info('fetched btn');
    log.info("clicking...")
    await page.waitForTimeout(3860);
    await page.screenshot({ path: 'screenshotstart.png' });
    await page.mouse.click(100, 200);
    console.log('done');

    await page.waitForSelector('#top-banner > div.minContainer > div > div > div > div.fsw > div.fsw_inner.returnPersuasion > div.flt_fsw_inputBox.searchCity.inactiveWidget');
    await page.locator('//*[@id="top-banner"]/div[2]/div/div/div/div[2]/div[1]/div[1]').click();
    await page.getByPlaceholder('From').fill('BOM');
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Tab')

    await page.getByPlaceholder('To').fill('DXB');
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Tab')

    // clusterViewPrice
    await page.locator('//*[@id="top-banner"]/div[2]/div/div/div/div[2]/div[1]/div[3]/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div[3]/div[3]/div[6]/div').click()
    await page.locator('//*[@id="top-banner"]/div[2]/div/div/div/div[2]/p/a').click()

    await page.waitForSelector('#root > div > div:nth-child(2) > div.flightBody > div.overlay > div > div > div.makeFlex.hrtlCenter.right > button')
    await page.screenshot({ path: 'banner.png' });
    
    await page.locator('//*[@id="root"]/div/div[2]/div[2]/div[2]/div/div/div[3]/button').click();

    await page.waitForTimeout(1000);

    for (let i = 0; i < 5; i++) {
        await page.keyboard.press('End');
        
    }

    await page.waitForTimeout(3000);
    const categoryTexts = await page.$$eval('.airlineName', (els) => {
        return els.map((el) => el.textContent);
    });
    categoryTexts.forEach((text, i) => {
        console.log(`Airline: ${i + 1}: ${text}\n`);
    });

});

