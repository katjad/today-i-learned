'use strict';
var expect = require('chai').expect;  
var getTodayILearnedData = require('./api.js');
console.log(getTodayILearnedData)
describe('getTodayILearnedData', function() {
    it('api.js file should exist', function() {
        var getTodayILearnedData = require('./api.js');
        expect(getTodayILearnedData).to.not.be.undefined;
    });

    xit('getTodayILearnedData should return an object', function() {
      const spreadsheetUrl = 'https://spreadsheets.google.com/feeds/list/1g18cE7LReFyhrKhF3bR7wxF5kHrXvY2wqTr6ORxaTB0/1/public/values?alt=json'
      const data = getTodayILearnedData(spreadsheetUrl)
        expect(data).to.be.an('object');
    });
});
