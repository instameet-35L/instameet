const Meeting = require("../models/meeting")
const ObjectId = require("mongodb").ObjectId

// Create meeting document
async function createMeeting(body) {
  console.log("Incoming POST request!")
  // Take data from http body
  const username = body
  const meeting = new Meeting(username)
  const meetingtoSave = await meeting.save()
  return meetingtoSave
}

async function getMeeting(id) {
  return await Meeting.findById(ObjectId(id))
}

module.exports = { createMeeting, getMeeting }
