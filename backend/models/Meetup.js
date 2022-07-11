const { Schema, model } = require("mongoose");

const meetupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = model("Meetup", meetupSchema);
