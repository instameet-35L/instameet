const Meeting = require("../models/meeting")
const ObjectId = require("mongodb").ObjectId

// Create meeting document
async function createMeeting(body) {
  console.log(`POST request: ${JSON.stringify(body)}`)

  const meeting = new Meeting(body.meetingData)

  return await meeting.save()
}

async function getMeeting(id) {
  return await Meeting.findById(ObjectId(id))
}

async function getAllMeeting() {
  return await Meeting.find({})
}

module.exports = { createMeeting, getMeeting, getAllMeeting }
