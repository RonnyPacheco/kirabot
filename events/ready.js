module.exports = client => {
    console.log('Logged in as ' + client.user.tag + '!');

    /*
    const puppeteer = require('puppeteer');
    const $ = require('cheerio');
    const url = 'https://old.reddit.com/user/thesquatingdog';

    const channel = client.channels.find(ch => ch.name === 'general');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member


    puppeteer
        .launch()
        .then(function (browser) {
            return browser.newPage();
        })
        .then(function (page) {
            return page.goto(url).then(function () {
                return page.content();
            });
        })
        .then(function (html) {
            const channel = client.channels.find(ch => ch.name === 'general');
            // Do nothing if the channel wasn't found on this server
            if (!channel) return;
            // Send the message, mentioning the member


            $('a.Post__titleLink', html).each(function (i, link) {
                var re = new RegExp(/Season \d+, Week \d+/i)

                if ($(link).text().match(re)) {
                    console.log('After: ' + $(link).text() + ':\n  ' + $(link).attr('href'))
                    channel.send($(link).text() + ':\n   ' + 'https://old.reddit.com' + $(link).attr('href'))
                }
            });
        })
        .catch(function (err) {
            //handle error
        });
        */

};