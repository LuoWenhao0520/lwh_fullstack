const puppeteer = require('puppeteer');
const $ = require('cheerio')

// console.log($);

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://juejin.cn/books',{
        waitUntil: 'networkidle0'
    });

    // await page.screenshot({
    //     path: './juejin.png'
    // })

    const html = await page.content();
    const books = $('.info',html);

    let booksInfo = []

    books.each(function(item) {
        let name = item.find('.title').text().trim();
        let auth = item.find('.author-name').text().trim();
        console.log(name,auth);
        booksInfo.push({
            name,auth
        })
    })


    await browser.close();
}

run();