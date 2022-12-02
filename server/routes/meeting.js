const express = require("express")
const {
  createMeeting,
  getMeeting,
  addBestTime,
  getAllMeeting,
  getOrInsertUser,
  addAvailability,
  removeAvailability,
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

// Register new user or login as existing user
router.post("/registerOrLogin/:meetingId", (req, res) => {
  if (req.body.user != null) {
    getOrInsertUser(req.params.meetingId, req.body.user)
      .then((response) => res.status(200).send(response))
      .catch((error) => {
        res.status(400).send(error)
      })
  } else {
    res.status(400).send("No user defined")
  }
})

// Add new available time, or don't modify if already in database
router.post("/addAvailability/:meetingId", (req, res) => {
  if (req.body.userName != null && req.body.timeIndex != null) {
    addAvailability(req.params.meetingId, req.body.userName, req.body.timeIndex)
      .then((response) => res.status(200).send(response))
      .catch((error) => {
        res.status(400).send(error)
      })
  } else {
    res.status(400).send("Bad input data")
  }
})

// Remove available time, if present
router.post("/removeAvailability/:meetingId", (req, res) => {
  if (req.body.userName != null && req.body.timeIndex != null) {
    removeAvailability(
      req.params.meetingId,
      req.body.userName,
      req.body.timeIndex
    )
      .then((response) => res.status(200).send(response))
      .catch((error) => {
        res.status(400).send(error)
      })
  } else {
    res.status(400).send("Bad input data")
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
//Returns updated meeting Object
//Probably use for loop to call API on every meetingTime for a user
router.post("/available/:meetingId/:meetingTime/:userName", (req, res) => {
  addAvailability(
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

router.post("/addBestTime/:id/:time", (req, res) => {
  addBestTime(req.params.id, req.params.time)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

module.exports = router
