function getDistance(req, res, next){
  let key = "AIzaSyBlF8TNXj_FdB5xrIZBHB9uMk1UGegewrk";
  const originAddress = encodeURIComponent(req.body.originAddress);
  const destinationAddress = encodeURIComponent(req.query.destinationAddress);
  fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originAddress}&destinations=${destinationAddress}&key=${key}`)
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
  .catch((weatherError) => {
    console.log("Weather Error is ", weatherError)
    next(weatherError)
  });
}
function prepareResponse(req, res, next) {
  res.data = {
    distance: res.tripDistance,
    temperature: res.tempData,
    rainfall: res.rainData,
  };
  next();
}
module.exports = {
  getDistance,
  getWeatherData,
  prepareResponse,
};
