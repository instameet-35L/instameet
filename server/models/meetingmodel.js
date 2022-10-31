const mongoose = require("mongoose")

//Creating meeting Schema (template)
const meetingSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
})

//Exports meeting documents to collection called 'meeting'
module.exports = mongoose.model("Meeting", meetingSchema)
