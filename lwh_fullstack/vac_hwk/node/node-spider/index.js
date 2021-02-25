const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

https.get('https://movie.douban.com/top250',(res) => {
    let html = ''
    res.on('data',(chunk) => {
        html += chunk;
    })

    res.on('end',() => {
        let allFiles = []
        const $ = cheerio.load(html)

        $('li .item').each(function() {
            const title = $('.title',this).text()
            const rating = $('.rating_num',this).text()
            const pic = $('.pic img',this).attr('src')

            allFiles.push({
                title,
                rating,
                pic
            })
        })

        fs.writeFile('./data.json',JSON.stringify(allFiles),(err) => {
            if(!err){
                console.log('写入数据成功');
            }
        })
    })
})