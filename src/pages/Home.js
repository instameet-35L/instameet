import "../css/Home.css"
import React, { useState } from "react"
import Cal from "../components/Cal.js"
import TestAPI from "../components/TestAPI"
import Game from "../components/FillSchedule" // Missy added for testing
import CreateMeeting from "../components/CreateMeeting"
import TitleForm from "../components/TitleForm"

export default function Home() {
  const [title, setTitle] = useState()
  const [value, setValue] = useState(new Date())

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
      <Cal myValue={value} mySetValue={setValue} />
      <TitleForm setTitle={setTitle} />
      <CreateMeeting
        title={title}
        timeframe={{
          start: new Date("2022-11-10"),
          end: new Date(),
        }}
        creator={{ mongoId: 1, name: "Paul Zhang" }}
      />
      <Game />
    </div>
  )
}
