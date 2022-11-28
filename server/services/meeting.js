const Meeting = require("../models/meeting")
const ObjectId = require("mongodb").ObjectId

// Create meeting document
async function createMeeting(body) {
  const meeting = new Meeting(body.meetingData)

  return await meeting.save()
}

async function getMeeting(id) {
  return await Meeting.findById(ObjectId(id))
}

async function getOrInsertUser(id, name) {
  const meeting = await getMeeting(id)

  console.log(meeting.users.length)

  const existingUser = meeting.users.find((user) => {
    return user.name === name
  })

  if (existingUser === undefined) {
    meeting.users.push({ name, available: [] })
    return await meeting.save()
  } else {
    return existingUser
  }
}

async function getAllMeeting() {
  return await Meeting.find({})
}

module.exports = {
  createMeeting,
  getMeeting,
  getAllMeeting,
  getOrInsertUser,
}
