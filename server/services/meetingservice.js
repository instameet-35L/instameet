const Meeting = require("../models/meetingmodel")

//Create meeting document
async function createMeeting(body) {
  console.log("Incoming POST request!")
  //Take data from http body
  const username = body
  const meeting = new Meeting(username)
  const meetingtoSave = await meeting.save()
  return meetingtoSave
}

//Finds all Meeting documents
async function getAllMeetings() {
  const allMeetings = await Meeting.find({})
  return allMeetings
}

module.exports = { createMeeting, getAllMeetings }
