import "../css/Home.css"
import React, { useState } from "react"
import Cal from "../components/Cal.js"
import TestAPI from "../components/TestAPI"
import Board from "../components/FillSchedule" // Missy added for testing
import GroupBoard from "../components/GroupGrid"
import CreateMeeting from "../components/CreateMeeting"
import TitleForm from "../components/TitleForm"
import NavBar from "../components/NavBar"

export default function Home() {
  const [title, setTitle] = useState()
  const [timeframe, setValue] = useState(new Date()) //calendar props

  return (
    <div className="main flex grow flex-col items-stretch pb-20 gap-5 bg-[#FAF9F6]">
      <NavBar />
      <div className="flex grow justify-evenly">
        <TitleForm setTitle={setTitle} />
        <Cal myValue={timeframe} setMyValue={setValue} />
      </div>
      <CreateMeeting
        title={title}
        timeframe={{ start: timeframe[0], end: timeframe[1] }}
        creator={{ mongoId: 1, name: "Paul Zhang" }}
      />
      {/* <Board /> */}
    </div>
  )
}
