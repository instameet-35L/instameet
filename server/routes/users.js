const express = require("express")
const router = express.Router()

//Return JSON object on /
router.get("/", (req, res) => {
  res.json([
    {
      user: "Max",
      meetingID: "1",
    },
    {
      user: "Paul",
      meetingID: "5",
    },
    {
      user: "Claire",
      meetingID: "20",
    },
    {
      user: "Missy",
      meetingID: "50",
    },
    {
      user: "Arathi",
      meetingID: "100",
    },
  ])
})

modules.exports = router
