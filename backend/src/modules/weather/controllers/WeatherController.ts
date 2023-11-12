import express, { Request, Response, NextFunction } from 'express';
const NextDays = require('../../../models/NextDaysList');
const mongoose = require('mongoose');

export default class WeatherController {
  public async getWeatherForCurrentLocation(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const { lat, long, location } = req.query;
    let data, query, nextDays;
    if (location === undefined || location == '') {
      query = `lat=${lat}&lon=${long}`;
    } else {
      query = `q=${location}`;
    }

    let saveNextDaysDB;
    if (location !== undefined || location !== '') {
      try {
        saveNextDaysDB = await NextDays.find({
          city: { $regex: location, $options: 'i' },
        });
      } catch (error) {}
    }

    // DAILY TEMPERATURE
    try {
      data = await fetch(
        `${process.env.WEATHER_BASE_URL}/weather?${query}&units=metric&lang=pt&appid=${process.env.WEATHER_API_KEY}`,
      ).then(response => {
        return response.json();
      });
    } catch (error: any) {}

    // NEXT DAYS TEMPERATURE
    if (saveNextDaysDB === undefined || !saveNextDaysDB[0]) {
      try {
        //GET FROM WEATHER API
        nextDays = await fetch(
          `${process.env.WEATHER_BASE_URL}/forecast?${query}&units=metric&lang=pt&appid=${process.env.WEATHER_API_KEY}`,
        )
          .then(response => {
            return response.json();
          })
          .then(data => data as any);

        const saveNextDays = new NextDays({
          day: nextDays.list[0].dt_txt,
          city: location,
          list: nextDays.list,
        });

        // SAVE IN MONGODB
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await saveNextDays.save({ session: sess });
        await sess.commitTransaction();
      } catch (error: any) {}
    } else {
      nextDays = saveNextDaysDB[0];
    }

    return res.json({ data: data, nextDays: nextDays });
  }
}
