var express = require('express');
var router = express.Router();
var fortune = require('./../../lib/fortune.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'fortune',
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/tests-about.js'
    });
});

module.exports = router;