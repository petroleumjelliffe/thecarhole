var express = require('express');
var Forecast = require('forecast.io');
var Util = require('util');

var router = express.Router();

router.use(function(req, res) {
  var key = req.query.forecast_key || process.env.FORECAST_API_KEY
  var lat = req.query.lat || 40.6816778; //NYC
  var lon = req.query.lon || -73.9962808; //NYC
  console.log(key);

  var options = {
    "APIKey": key
  }
  var forecast = new Forecast(options);

  var that= res;
  forecast.get(lat, lon, function (err, res, data) {
    if (err) throw err;


    that.json(data)
  });
});

module.exports = router;
