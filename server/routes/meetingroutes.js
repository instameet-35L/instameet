const express = require("express")
const router = express.Router()
const services = require("../services/meetingservice")

router.post("/", (req, res) => {
  //Get HTTP body from req
  const body = req.body
  //Call service-layer function createMeeting
  services
    .createMeeting(body)
    .then((response) => {
      //On completetion of createMeeting, let client know it was a success
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(401).send(error)
    })
})

router.get("/", (req, res) => {
  //Get HTTP body from req
  //Call service-layer function createMeeting
  services
    .getAllMeetings()
    .then((response) => {
      //On completetion of createMeeting, let client know it was a success
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(401).send(error)
    })
})

module.exports = router
