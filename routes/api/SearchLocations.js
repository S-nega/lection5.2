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

router.get('/search', (req, res) => {
  res.render('search');
})

router.post('/search', (req, res) => {

  const city = req.body.city;

  if(!city) {
    console.log("enter name of the city")
    res.render('search');
  } else { 
    res.redirect('/api/weather/'+city);
  }
})

router.get('/weather/:city', async(req, res) => {
    //build api URL with user zip
    const {city} = req.params
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
    //ENTER YOUR API KEY HERE (make sure to no include < >)
    const apiId = '&appid=a3a57c49760152eb5e48acf5527cc76c&units=metric';
   
    const userLocation = (url1, url2, city) => {
       let newUrl = url1 + city + url2;
       return newUrl;
    };	
   
    const apiUrl = userLocation(baseUrl, apiId, city);
   
    // if (apiUrl) {
    //   console.log(apiUrl);
    // }
    fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
      console.log("data: " + data)
      res.render('weather', {data})
			// res.send({ data });
		})
		.catch(err => {
			res.render('error');
		});

    // fetch(apiUrl)
    // .then(data => {
    //     // console.log("data: " + data.body.weather)
    //     // console.log("weather: " + data.weather)
    //     // res.render('weather', {data: data, city: city})
    //    res.send({ data: data });
    // })
    // .then(res => res.json())
    // .catch(err => {
    //    res.render('error');
    // });
  })

module.exports = router;

