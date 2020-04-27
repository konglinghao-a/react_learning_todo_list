var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'konglinghao接口测试' });
});

router.get('/api/todos', function (req, res, next) {
  const data = require('./../data/todo.json');
  res.json(data);
})

module.exports = router;
