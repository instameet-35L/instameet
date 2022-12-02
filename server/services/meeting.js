const Meeting = require("../models/meeting")
const ObjectId = require("mongodb").ObjectId

// Create meeting document
async function createMeeting(body) {
  const meeting = new Meeting(body.meetingData)

  return await meeting.save()
}

async function addBestTime(id, time) {
  const meeting = await getMeeting(id)
  meeting.bestTime.push(time)
  return await meeting.save()
}

async function getMeeting(id) {
  return await Meeting.findById(ObjectId(id))
}

async function getOrInsertUser(id, name) {
  const meeting = await getMeeting(id)

  const existingUser = meeting.users.find((user) => {
    return user.name === name
  })

  if (existingUser === undefined) {
    meeting.users.push({ name, available: [] })
    await meeting.save()
    return name
  } else {
    return existingUser.name
  }
}

async function getAllMeeting() {
  return await Meeting.find({})
}

async function addAvailability(meetingId, userName, timeIndex) {
  const meeting = await getMeeting(meetingId)

  const userToUpdate = meeting.users.find((user) => user.name === userName)

  if (userToUpdate.available.indexOf(timeIndex) === -1) {
    userToUpdate.available.push(timeIndex)
  } else {
    throw new Error("Available time already exists")
  }

  return await meeting.save()
}

async function removeAvailability(meetingId, userName, timeIndex) {
  const meeting = await getMeeting(meetingId)

  const userToUpdate = meeting.users.find((user) => user.name === userName)
  const removalIndex = userToUpdate.available.indexOf(timeIndex)

  if (removalIndex !== -1) {
    userToUpdate.available.splice(removalIndex, 1)
  } else {
    throw new Error("Could not find available time to remove")
  }

  return await meeting.save()
}

module.exports = {
  createMeeting,
  getMeeting,
  addBestTime,
  getAllMeeting,
  getOrInsertUser,
  addAvailability,
  removeAvailability,
}
