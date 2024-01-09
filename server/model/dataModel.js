const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: { type: Date, default: Date.now },
  published: Date,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});

const data = mongoose.model('data', dataSchema);

module.exports = data;