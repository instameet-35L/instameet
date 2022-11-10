const express = require("express")
const { createMeeting, getMeeting } = require("../services/meeting")

const router = express.Router()

router.post("/", (req, res) => {
  // Get HTTP body from req
  const body = req.body
  // Call service-layer function createMeeting
  createMeeting(body)
    .then((response) => {
      // On completetion of createMeeting, let client know it was a success
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(401).send(error)
    })
})

router.get("/:meetingId", (req, res) => {
  getMeeting(req.params.meetingId)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(401).send(error)
    })
})

module.exports = router
