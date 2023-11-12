const express = require('express');

import WeatherController from '../controllers/WeatherController';

const weatherRouter = express.Router();
const weatherController = new WeatherController();

weatherRouter.get('/', weatherController.getWeatherForCurrentLocation);

export default weatherRouter;
