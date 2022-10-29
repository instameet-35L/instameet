const express = require("express")

const app = express()

app.get("/api", (req, res) => {
  res.send("lmao")
})

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
)
