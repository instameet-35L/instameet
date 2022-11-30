const express = require("express")
const {
  createMeeting,
  getMeeting,
  getAllMeeting,
  getOrInsertUser,
  addToAvailability,
} = require("../services/meeting")

const router = express.Router()

// Creates a new meeting
router.post("/new", (req, res) => {
  // Call service-layer function createMeeting
  createMeeting(req.body)
    .then((response) => {
      // On completetion of createMeeting, let client know it was a success
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(401).send(error)
    })
})

// Retrieves JSON object representing a meeting's data
router.get("/get/:meetingId", (req, res) => {
  getMeeting(req.params.meetingId)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(401).send(error)
    })
})

// Update meeting data in database
router.post("/update/:meetingId", (req, res) => {
  if (req.body.user !== undefined) {
    getOrInsertUser(req.params.meetingId, req.body.user)
      .then((response) => res.status(200).send(response))
      .catch((error) => {
        res.status(400).send(error)
      })
  } else {
    res.status(400).send("No user defined")
  }
})

// Retrieves all meetings.
//
// TODO: Do we need this?
router.get("/all", (req, res) => {
  getAllMeeting()
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

// Adds availability to users[i].available
//Pass in meetingId, then meetingTime, then username
router.post("/available/:meetingId/:meetingTime/:userName", (req, res) => {
  // const targetMeeting = getMeeting(req.params.meetingId).catch((error) =>
  //   res.status(404).send(error)
  // )
  // console.log(targetMeeting)
  addToAvailability(
    req.params.meetingId,
    req.params.meetingTime,
    req.params.userName
  )
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

module.exports = router
