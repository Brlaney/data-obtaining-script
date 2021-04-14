const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');

const baseUrl = 'https://www.iknowknoxville.com/categories';

axios.get(baseUrl).then(urlResponse => {
  if (urlResponse.status === 200) {
    const $ = cheerio.load(urlResponse.data);
    let dataList = [];

    $('div.categoryBlock').each(function (i, elem) {
      dataList[i] = {
        links: $(this).find('a').attr('href').split('/')
          .map(link => link.trim())
          .filter(function(n){ return n != "" })
      }
    });
    const dataListTrimmed = dataList.filter(n => n != undefined)
    fs.writeFile('dataListTesting.json',
      JSON.stringify(dataListTrimmed, null, 4),
      (err) => console.log('File successfully written!'))
  }
}, (error) => console.log(error) );
