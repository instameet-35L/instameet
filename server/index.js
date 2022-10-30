const express = require("express")
const app = express()
//Import users.js to main server file
const users = require("./routes/users")

//Return users JSON on request to /api/users
app.use("/api/users", users)

app.get("/api", (req, res) => {
  res.send("Hello World from express!")
})

app.listen(1234, () => console.log("Express listening on port 1234"))
