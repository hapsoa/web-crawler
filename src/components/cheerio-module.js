const cheerio = require('cheerio');
const _ = require('lodash');

const cheerioModule = new function () {
  let rootHtml;
  let findingClass;

  this.setRoot = (options) => {
    rootHtml = options.rootHtml;
    findingClass = options.findingClass;
  };

  this.findText = () => {
    if (_.isNil(rootHtml)) {
      console.error('not have rootHtml!');
    }
    const $ = cheerio.load(rootHtml);

    if (findingClass === '') {
      return _.map($('div').toArray(), element => $(element).text());
    }
    console.log($(`.${findingClass}`).toArray());
    return _.map($(`.${findingClass}`).toArray(), element => $(element).text());
    // return $('div').text();
  };

  this.findATags = () => {
    if (_.isNil(rootHtml)) {
      console.error('not have rootHtml!');
    }
    const $ = cheerio.load(rootHtml);

    const linkArray = [];

    $('a').each((i, elem) => {
      const $elem = $(elem);
      // console.log(i);
      // console.log($(elem).text());
      // console.log($(elem).attr('href'));
      if (!_.isNil($elem.attr('href'))) {
        linkArray.push($elem.attr('href'));
      }
    });

    return linkArray;
  };
}();

module.exports = cheerioModule;
