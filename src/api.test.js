'use strict';
var expect = require('chai').expect;  
var getTodayILearnedData = require('./api.js');

describe('getTodayILearnedData', function() {
    it('api.js file should exist', function() {
        var getTodayILearnedData = require('./api.js');
        expect(getTodayILearnedData).to.not.be.undefined;
    });
});
