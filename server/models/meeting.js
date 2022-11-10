const mongoose = require("mongoose")

const meetingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
})

module.exports = mongoose.model("Meetings", meetingSchema)
