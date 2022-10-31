const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const { connect } = require("./mongoConfig")

app.use(cors())
app.use(bodyParser.json())
//Connect to MongoDB Atlas
connect()

app.use("/api/test", require("./routes/meetingroutes"))

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
)
