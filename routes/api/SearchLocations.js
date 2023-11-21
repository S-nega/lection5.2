var express = require('express');
var router = express.Router();
// const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/alm', async(req, res) => {
//   console.log("hello");
//   res.redirect('https://api.openweathermap.org/data/2.5/weather?q=almaty&appid=a3a57c49760152eb5e48acf5527cc76c')
// })

router.get('/weather', (req, res) => {
    //build api URL with user zip
    var city = "Almaty"
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    //ENTER YOUR API KEY HERE (make sure to no include < >)
    const apiId = '&appid=a3a57c49760152eb5e48acf5527cc76c&units=imperial';
   
    const userLocation = (url1, url2, city) => {
       let newUrl = url1 + city + url2;
       return newUrl;
    };	
   
    const apiUrl = userLocation(baseUrl, apiId, city);
   
    fetch(apiUrl)
    .then(data => {
        console.log("data: " + data)
        // console.log("weather: " + data.weather)
        res.render('weather', {data: data, city: city})
    //    res.send({ data: data });
    })
    .then(res => res.json())
    .catch(err => {
       res.render('error');
    });
  })

module.exports = router;

