var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/alm', async(req, res) => {
//   console.log("hello");
//   res.redirect('https://api.openweathermap.org/data/2.5/weather?q=almaty&appid=a3a57c49760152eb5e48acf5527cc76c')
// })

module.exports = router;
