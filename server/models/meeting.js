const mongoose = require("mongoose")

const meetingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  timeframe: {
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
  },

  times: {
    type: Map,
    of: [Number], // IDs of users available during this time
  },

  users: [
    {
      mongoId: Number,
      name: String,
    },
  ],
})

module.exports = mongoose.model("Meetings", meetingSchema)
