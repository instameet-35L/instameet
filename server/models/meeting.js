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

  users: [
    {
      name: {
        type: String,
        unique: true,
        required: true,
      },

      // Stores a user's available times as grid cell indices.
      //
      // 0 corresponds to the earliest time (currently hardcoded to 6:00 am) of
      // the first day (stored in `timeframe.start` of this schema). 1
      // corresponds to the earliest time of the second day, and so on.
      //
      // For example, given that the earliest time is 6:00 am, the start date is
      // Jan. 1, and the end date is Jan. 3:
      //
      // `available = [0, 1, 3, 5]` means the user is available on 6 am of Jan.
      // 1, 6 am of Jan. 2, 7 am of Jan. 1, and 7 am of Jan. 3, respectively.
      available: {
        type: [Number],
        required: true,
      },
    },
  ],
})

module.exports = mongoose.model("Meetings", meetingSchema)
