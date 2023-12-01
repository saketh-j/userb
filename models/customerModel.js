const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  FullName: String,
  Email: String,
  Password: String,
  CountryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
  StateID: { type: mongoose.Schema.Types.ObjectId, ref: 'State' },
  CityID: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
  LanguagesIDs: [String],
  IsActive: Boolean,
  CreatedDate: { type: Date, default: Date.now },
  ModifiedDate: Date,
});

module.exports = mongoose.model('Customer', customerSchema);
