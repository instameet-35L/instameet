const express = require("express")
const {
  createMeeting,
  getMeeting,
  getAllMeeting,
} = require("../services/meeting")

const router = express.Router()

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

router.get("/id/:meetingId", (req, res) => {
  getMeeting(req.params.meetingId)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(401).send(error)
    })
})

router.get("/all", (req, res) => {
  getAllMeeting()
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

module.exports = router
