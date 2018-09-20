const cheerio = require('cheerio');
const _ = require('lodash');

const cheerioModule = new function () {
  let rootHtml;
  let classOrTag;
  let findingSelector;

  this.setRoot = (options) => {
    rootHtml = options.rootHtml;
    classOrTag = options.classOrTag;
    findingSelector = options.findingSelector;
  };

  this.findText = () => {
    if (_.isNil(rootHtml)) {
      console.error('not have rootHtml!');
      return null;
    }
    const $ = cheerio.load(rootHtml);

    if (findingSelector === '' || classOrTag === '') {
      console.log(rootHtml);
      console.log($('body').toArray());
      return _.map($('div').toArray(), element => $(element).text());
    }
    if (classOrTag === 'class') {
      console.log($(`.${findingSelector}`).toArray());
      return _.map($(`.${findingSelector}`).toArray(), element => $(element).text());
    } else if (classOrTag === 'tag') {
      return _.map($(`${findingSelector}`).toArray(), element => $(element).text());
    }
    return null;


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
