const mongoose = require("mongoose")

const connect = () => {
  const url =
    "mongodb+srv://admin:FD1V0ZHFdfSOSJK2@instameet.curxeae.mongodb.net/testMeetings?retryWrites=true&w=majority"
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.on("error", (err) => {
    console.error("ERROR: ", err)
  })
}

const disconnect = () => {
  if (!mongoose.connection) {
    return
  }

  mongoose.disconnect()
}

module.exports = {
  connect,
  disconnect,
}
