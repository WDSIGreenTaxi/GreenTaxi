let key = "AIzaSyBlF8TNXj_FdB5xrIZBHB9uMk1UGegewrk";

function getOriginLatLong (req, res, next) {
  const originAddress = encodeURIComponent(req.body.originAddress);
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${originAddress}&key=${key}`)
  .then(r => r.json())
  .then((originData) => {
    res.originLat = originData.results.location.lat;
    res.originLong = originData.results.location.lng;
    next()
  })
  .catch((originError) => {
    console.log("Origin Error is ", originError);
    next(originError);
  });
}

function getDestinationLatLong(req, res, next) {
  const destinationAddress = encodeURIComponent(req.query.destinationAddress);
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destinationAddress}&key=${key}`)
    .then(r => r.json())
    .then((desinationData) => {
      res.destinationLat = destinationData.results.location.lat;
      res.destinationLong = destinationData.results.location.lng;
      next();
    })
    .catch((destinationError) => {
      console.log("Destination Error is ", destinationError);
      next(destinationError);
    });
}

function getDistance(req, res, next){
  fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originLat},${originLong}&destinations=${destinationLat},${destinationLong}&key=${key}`)
    .then(r => r.json())
    .then((distanceData) => {
      res.tripDistance = distanceData.rows.elements.distance.text;
      next();
    })
    .catch((distanceError) => {
      console.log("Distance Error is ", distanceError);
      next(distanceError);
    });
}

function getWeatherData(req, res, next){
  let weatherKey = '849f384cb271e06e'
  fetch(`http://api.wunderground.com/api/${weatherKey}/conditions/q/NY/New_York.json`)
  .then(r => r.json())
  .then((weatherData) => {
    res.tempData = weatherData.currentObservation.temp_f;
    res.rainData = weatherData.currentObservation.precip_today_in;
    next();
  })
  .catch(error => next(error));
}

function prepareResponse(req, res, next) {
  res.data = {
    origin_lat: res.originLat,
    origin_long: res.originLong,
    dest_lat: res.destinationLat,
    dest_long: res.destinationLong,
    distance: res.tripDistance,
    temperature: res.tempData,
    rainfall: res.rainData,
  };
  next();
}

module.exports = {
  getOriginLatLong,
  getDestinationLatLong,
  getDistance,
  getWeatherData,
  prepareResponse,
};
