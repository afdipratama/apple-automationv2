const puppeteer = require('puppeteer-extra');
const fetch = require('node-fetch');
const ncp = require("copy-paste");
const chromePaths = require('chrome-paths');
const cheerio = require('cheerio');
const fs = require('fs');
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

const sleep = ms => new Promise(res => setTimeout(res, ms));
const password = "Anjing404!";
var {
    random,randlast
} = require('./names.js');
const { get } = require('http');

var ascii = fs.readFileSync('ascii.txt',{encoding: 'utf-8'});
console.log(ascii);

// VAR DATE

let day = "12";
let month = "11";
let tahun = "1990";
const nomor = Math.floor(Math.random() * 200);

// VAR BILLING
const bin = "543897"
const acak = Math.floor(Math.random() * 2391839128) + 2893478237;
const vcc = "555"
var ends = ['2025', '2026', '2027']; 
var rand = ends[(Math.random() * ends.length) | 0]
const cc = bin+acak;

// VAR ADDRESS

const addr1 = 'Jl Wijaya II Wijaya Graha Puri';
const addr2 = 'Blok B1/G23';
const addr3 = 'Jakarta';
const addr4 = '12160';
const addr5 = '+628';
const addr6 = ''

puppeteer.use(StealthPlugin());
puppeteer.use(AdblockerPlugin({
    blocktrackers: true
}));

const emailInfo = random();
const lastInfo = randlast();


(async () => {
    const browser = await puppeteer.launch({
        headless: false,
	    executablePath: chromePaths.chrome,
        args: [
            '--no-sandbox',
            '--disable-notifications'
        ]
    });
    await sleep(1000, console.log('\n'));
    let allPage = await browser.pages();
    const page = await allPage[0];
    

    await page.goto('https://music.apple.com/includes/commerce/account/create/personal', {
        waitUntil: 'networkidle2',
    });
    

    const pageTwo = await browser.newPage()

    await pageTwo.goto('https://temp-mail.to/')
    await sleep (4000)
    await pageTwo.click('.mailbox > .mail-container > .message-inbox > .cta-refresh > a')
    await sleep(3000)
    await pageTwo.click('.mail-head > .nop > li > .copytrg > .icon-copy')
    await page.bringToFront()
    

    await sleep (2000, console.log("==> Mencoba load URL : https://music.apple.com/"))

    await page.setViewport({ width: 1280, height: 720})

    await page.waitForSelector('#firstName')
    await page.click('#firstName')
    await page.keyboard.type(emailInfo)
    await sleep(1000)
    await page.waitForSelector('#lastName')
    await page.click('#lastName')
    await page.keyboard.type(lastInfo)
    await sleep(1500)
    await page.waitForSelector('#birthday')
    await page.focus('#birthday')
    await page.keyboard.type(day , {delay: 20});
    await sleep(3000)
    await page.keyboard.type(month , {delay: 20});
    await sleep(2000)
    await page.keyboard.type("1990" , {delay: 20});
    await sleep(1000)
    await page.waitForSelector('#email')
    await page.click('#email')
    await page.keyboard.down('ControlLeft')
    await page.keyboard.press('V')
    await page.keyboard.up('ControlLeft')
    await sleep(1000)
    await page.waitForSelector('#acAccountPassword')
    await page.click('#acAccountPassword')
    await page.keyboard.type(password)
    await page.waitForSelector('#agreedToTerms')
    await page.click('#agreedToTerms')
    await sleep(1000)
    await page.waitForSelector('.account-base__content > .create-account > .create-account__form > .form-buttons > .web-button-form')
    await page.click('.account-base__content > .create-account > .create-account__form > .form-buttons > .web-button-form')
    await sleep(1000)
    await sleep(1000)
    await sleep(1000)
    await sleep(1000)
    await pageTwo.bringToFront()
    const appInfo = await page.waitForSelector('span[class="verify-email-sublabel__email"');
    const value = await appInfo.evaluate(el => el.textContent);
    

    // And here is your game names
    
    await sleep(1000, console.log("==> Membuat akun Apple : " + value + "|" + password))       
    await sleep(6000)
    fs.appendFile("akun.txt", value + "|" + password + "\n" , function (err) {

        if (err) return console.log(err);
      });
    await pageTwo.evaluate(() => {
        location.reload(true)
     })
    await sleep(2000)
    await pageTwo.click('.mailbox > .mail-container > .message-inbox > .cta-refresh > a')
    await sleep(2000)
    await pageTwo.waitForSelector('.os-padding > .os-viewport > .os-content > .inbox-list > .inbox-one')
    await pageTwo.click('.os-padding > .os-viewport > .os-content > .inbox-list > .inbox-one')
     await pageTwo.keyboard.down('ControlLeft')
    await pageTwo.keyboard.press('C')
    await pageTwo.keyboard.up('ControlLeft')
    
    
    await sleep(3000)   


    

    const elementHandle = await pageTwo.$('iframe[class="bodyHTML"');
    const frame = await elementHandle.contentFrame();
    const getOtp = await frame.$('#main > div.container > div > div > p > b');
    const Otp1 = await getOtp.evaluate(el => el.textContent);

    const click = await frame.$('#main > div.container > div > div > p > b');
    await click.click({clickCount:3})
    await sleep(1000,console.log('==> OTP Apple : ' + Otp1))
    await pageTwo.keyboard.down('ControlLeft')
    await pageTwo.keyboard.press('C')
    await pageTwo.keyboard.up('ControlLeft')
    await sleep(1000)
    await page.bringToFront()
    await page.click('#secretCode')
    await page.keyboard.down('ControlLeft')
    await page.keyboard.press('V')
    await page.keyboard.up('ControlLeft')
                      
                    await page.waitForSelector('#app > div > div > div > main > div.account-base__content > div > form > div.form-buttons > button.web-button-form.form-button.web-button-form--primary.form-buttons__continue.form-buttons__button')
                    await page.click('#app > div > div > div > main > div.account-base__content > div > form > div.form-buttons > button.web-button-form.form-button.web-button-form--primary.form-buttons__continue.form-buttons__button')
                    await sleep(2000, console.log("==> Mengisi data field address & billing info... "))
                    await page.waitForSelector('#creditCardNumber')
                    await page.click('#creditCardNumber')

                    const pageThree = await browser.newPage()
                    await pageThree.goto('https://bin-checker.net/bin-generator.html')

                    await pageThree.waitForSelector('#ccpN')
                    await pageThree.click('#ccpN')
                    await pageThree.keyboard.type("543897")

                    await pageThree.waitForSelector('#generar')
                    await pageThree.click('#generar')

                    
                    await pageThree.click('textarea[name="output2"',{ clickCount: 3 })
                    await pageThree.keyboard.down('ControlLeft')
                    await pageThree.keyboard.press('C')
                    await pageThree.keyboard.up('ControlLeft')
                    // await pageThree.mouse.click(160, 300, {delay: 1000, button: 'left'});
                    await sleep(3000)
                    await pageThree.close(sleep(2000))
                    await pageTwo.bringToFront()
                    // await pageTwo.close(sleep(1000))
                    await page.click('input[id=creditCardNumber]')
                    await page.keyboard.down('ControlLeft')
                    await page.keyboard.press('V')
                    await page.keyboard.up('ControlLeft')

                    await sleep(3000)
                    await page.waitForSelector('#expiration')
                    await page.click('#expiration')
                    await sleep(2000)
                    await page.keyboard.type("1" , { delay: 100 })
                    await sleep(2000)
                    await page.keyboard.type("2" , { delay: 100 })
                    await page.keyboard.type(rand , { delay: 100 })
                    await page.waitForSelector('#creditVerificationNumber')
                    await page.click('#creditVerificationNumber')
                    await page.keyboard.type(vcc)
                    await page.waitForSelector('#addressOfficialLineFirst')
                    await page.click('#addressOfficialLineFirst')
                    await page.keyboard.type(addr1)
                    await page.waitForSelector('#addressOfficialLineSecond')
                    await page.click('#addressOfficialLineSecond')
                    await page.keyboard.type(addr2)
                    await page.waitForSelector('#addressOfficialCity')
                    await page.click('#addressOfficialCity')
                    await page.keyboard.type(addr3)
                    await sleep(1000)
                    await page.click('select[name="addressOfficialStateProvince"]');
                    await sleep(1000)
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('Enter');
                    await page.waitForSelector('#addressOfficialPostalCode')
                    await page.click('#addressOfficialPostalCode')
                    await page.keyboard.type(addr4)
                    await page.waitForSelector('#phoneOfficeAreaCode')
                    await page.click('#phoneOfficeAreaCode')
                    await page.keyboard.type(addr5)
                    await page.waitForSelector('#phoneOfficeNumber')
                    await page.click('#phoneOfficeNumber')
                    await page.keyboard.type(JSON.stringify(acak));
                    await sleep(2000)
                    
                    await page.waitForSelector('#app > div > div > div > main > div.account-base__content > div > form > div.form-buttons.create-billing__navigation-buttons > button.web-button-form.form-button.web-button-form--primary.form-buttons__continue.form-buttons__button')
                    await page.click('#app > div > div > div > main > div.account-base__content > div > form > div.form-buttons.create-billing__navigation-buttons > button.web-button-form.form-button.web-button-form--primary.form-buttons__continue.form-buttons__button')
                    await sleep(4000)
                    await sleep(4000)
                    await sleep(4000)
                    await sleep(4000)
                    await sleep(4000) 
                    await page.keyboard.press("Tab");
                    await page.keyboard.press("Tab");
                    await page.keyboard.press("Tab");
                    await page.keyboard.press("Tab");
                    await page.keyboard.press("Space");
                    await sleep(5000)
                    await page.click('span[class="web-button__text"')
                    await sleep(5000 , console.log("==> Berhasil Membuat Akun Apple.."))
                    await sleep(1000)
                    await page.goto('https://appleid.apple.com/sign-in')
                    await console.log('==> Mencoba Membuat Hint Verification')
                    await pageTwo.click('.mail-head > .nop > li > .copytrg > .icon-copy')
                    
                    await page.evaluate(() => {
                        location.reload(true)
                     })
                     await sleep(6000)
                     await sleep (4000)
                    const appleUname = await page.$('iframe[name="aid-auth-widget"');
                    const getFrame = await appleUname.contentFrame();

                    const field1 = await getFrame.$('#account_name_text_field');
                    const field2 = await getFrame.$('#password_text_field');
                    const button = await getFrame.$('#sign-in');
                    await sleep(4000)
                    await field1.click({clickCount:2});
                    await page.keyboard.down('ControlLeft')
                    await page.keyboard.press('V')
                    await page.keyboard.up('ControlLeft')
                    await sleep(1000)
                    await button.click({clickCount:3});
                    await sleep(5000)
                    await field2.type(password)
                    await sleep(4000)
                    await button.click({clickCount:3});
                    await sleep(5000)
                    await pageTwo.evaluate(() => {
                        location.reload(true)
                     })
                    await sleep(1000)
                    await console.log('==> Verifikasi OTP...')
                    await pageTwo.click('.mailbox > .mail-container > .message-inbox > .cta-refresh > a')
                    await pageTwo.waitForSelector('.os-padding > .os-viewport > .os-content > .inbox-list > .inbox-one:nth-child(1)')
                    await pageTwo.click('.os-padding > .os-viewport > .os-content > .inbox-list > .inbox-one:nth-child(1)')
                    await sleep(3000)   
                    const elementHandle2 = await pageTwo.$('iframe[class="bodyHTML"');
                    const frame2 = await elementHandle2.contentFrame();
                
                    const click2 = await frame2.$('#main > div.container > div > div > b > p');
                    await click2.click({clickCount:3})
                    await pageTwo.keyboard.down('ControlLeft')
                    await pageTwo.keyboard.press('C')
                    await pageTwo.keyboard.up('ControlLeft')
                    await sleep(3000)
                    await page.keyboard.down('ControlLeft')
                    await page.keyboard.press('V')
                    await page.keyboard.up('ControlLeft')
                    await sleep(19000)
                    const appleUname3 = await page.$('iframe[id="repairFrame"');
                    const getFrame3 = await appleUname3.contentFrame();
                    const field3 = await getFrame3.$('input[class="form-textbox form-textbox-text"');
                    const button2 = await getFrame3.$('button[type="submit"')
                    // let anchorElem1 = await field3.$("a[class='email']");
                    let link1 = field3.attr("id"); 
                    await link1.click()
                    await sleep(1000)
                    await link1.type(vcc)
                    await sleep(1000)
                    await button2.click({clickCount: 2})
                    await sleep(10000)
                    // HINT 1
                    const hint1 = await page.$('iframe[id="repairFrame"');
                    const getHint1 = await hint1.contentFrame();
                    const fieldHint1 = await getHint1.$('select[class="form-dropdown"');
                    await fieldHint1.click();
                    await sleep(1000)
                    await fieldHint1.press('ArrowDown');
                    await fieldHint1.press('ArrowDown');
                    await fieldHint1.press('Enter');
                    const fieldHint2 = await getHint1.$('input[class="form-textbox"')
                    await fieldHint2.click({clickCount:2})
                    await fieldHint2.type('Mory')
                    const buttonHint1 = await getHint1.$('button[type="submit"')
                    await buttonHint1.click({clickCount:2})
                    // HINT 2
                    await sleep(2000)
                    const fieldHint3 = await getHint1.$('select[class="form-dropdown"')
                    await fieldHint3.press('ArrowDown');
                    await fieldHint3.press('ArrowDown');
                    await fieldHint3.press('Enter');
                    const fieldHint4 = await getHint1.$('input[class="form-textbox"')
                    await fieldHint4.click({clickCount:2})
                    await fieldHint4.type('Tidur')
                    const buttonHint2 = await getHint1.$('button[type="submit"')
                    await buttonHint2.click({clickCount:2})
                    // HINT 3
                    
                    await sleep(2000)
                    const fieldHint5 = await getHint1.$('select[class="form-dropdown"')
                    await fieldHint5.press('ArrowDown');
                    await fieldHint5.press('ArrowDown');
                    await fieldHint5.press('Enter');
                    const fieldHint6 = await getHint1.$('input[class="form-textbox"')
                    await fieldHint6.click({clickCount:2})
                    await fieldHint6.type('Monyong')
                    const buttonHint3 = await getHint1.$('button[type="submit"')
                    await buttonHint3.click({clickCount:2})
                    await sleep(5000)

                    // donny.lockman77@delivrmail.com
                    // walton_wiegand6@delivrmail.com
                    // Anjing404#!
            })();
