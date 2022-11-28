import "../css/Home.css"
import React, { useState } from "react"
import Cal from "../components/Cal.js"
import TestAPI from "../components/TestAPI"
import CreateMeeting from "../components/CreateMeeting"
import TitleForm from "../components/TitleForm"

export default function Home() {
  const [title, setTitle] = useState()
  const [timeframe, setValue] = useState(new Date())  //calendar props

  return (
    <div className="main">
      <div className="text-center">
        <h1 align="center">Instameet! 🤖 </h1>
        <a href="localhost:3000">
          <img
            src="./images/instameet-logo.jpeg"
            alt="Instameet Logo"
            width="200"
            height="auto"
          />
        </a>
      </div>
      <TitleForm setTitle={setTitle} />
      <Cal myValue={timeframe} setMyValue={setValue} />
      <CreateMeeting
        title={title}
        timeframe={{ start: timeframe[0], end: timeframe[1] }}
        creator={{ mongoId: 1, name: "Paul Zhang" }}
      />
      {/* <Board /> */}
    </div>
  )
}
