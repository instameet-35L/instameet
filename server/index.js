const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("mongoose-morgan")
const bodyParser = require("body-parser")
const { connect } = require("./mongoConfig")

app.use(
  morgan(
    {
      connectionString:
        "mongodb+srv://admin:8SNACsvytPppuy61@instameet.curxeae.mongodb.net/httplog?retryWrites=true&w=majority",
      collection: "logs",
      dbName: "httplogs",
    },
    {},
    "short"
  )
)
app.use(cors())
app.use(bodyParser.json())
//Connect to MongoDB Atlas
connect()

app.use("/api/test", require("./routes/meetingroutes"))

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
)
