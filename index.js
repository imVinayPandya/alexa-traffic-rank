var request = require('request'),
    cheerio = require('cheerio');

function requestp(rankData, url) {
    return new Promise(function (resolve, reject) {
        request(url, function (error, response, html) {
            if (!error) {
                var $ = cheerio.load(html);

                $('.globleRank').filter(function () {
                    var data = $(this);

                    rankData.globalRank = data.children().children().next().children().next().next().prev().text().toString().replace(/\s/g, "");
                    //console.log(rankData.globalRank);
                });
                $('.countryRank').filter(function () {
                    var data = $(this);
                    rankData.countryRank = {};
                    rankData.countryRank.rank = data.children().children().next().children().next().next().prev().text().toString().replace(/\s/g, "");
                    rankData.countryRank.country = data.children().children().children()['0'].attribs.title.toString();
                    //console.log(rankData.countryRank);
                });
                $('#engagement-content').filter(function () {
                    var data = $(this);

                    var engagementData = data.children().children().children().children().next().children().next().prev().text().toString().split('\n');
                    rankData.engagement = {};

                    rankData.engagement.bounceRate = engagementData[1].replace(/\s/g, "");
                    rankData.engagement.dailyPageViewPerVisitor = engagementData[2].replace(/\s/g, "");
                    rankData.engagement.dailyTimeOnSite = engagementData[3].replace(/\s/g, "");
                    //console.log(rankData.engagement);
                });
                resolve(rankData);
            } else {
                reject(error);
            }
        });
    });
}

function getAlexaRankData(siteUrl, callback) {
    var rankData = {};
    var url = "http://www.alexa.com/siteinfo/"+siteUrl;

    requestp(rankData, url).then(function(data) {
        callback(null, data);
    }, function(error){
        callback(error, null);
    })

}

module.exports = {
    AlexaWebData: getAlexaRankData
}