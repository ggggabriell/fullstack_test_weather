const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nextDaysSchema = new Schema({
  day: { type: String, required: true },
  city: { type: String, required: true },
  list: {},
});

module.exports = mongoose.model('NextDays', nextDaysSchema);
