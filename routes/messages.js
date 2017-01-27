var express = require('express');
var router = express.Router();

var messages=[];

router.get('/', function(req, res, next) {
  res.send(messages);
});

router.post('/', function(req, res, next) {
console.log(messages);
  messages.push(req.body);
});

module.exports = router;
