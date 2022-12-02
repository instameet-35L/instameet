import "../css/Home.css"
import React, { useState } from "react"
import Cal from "../components/Cal.js"
import TestAPI from "../components/TestAPI"
import CreateMeeting from "../components/CreateMeeting"
import TitleForm from "../components/TitleForm"
import NavBar from "../components/NavBar"

export default function Home() {
  const [title, setTitle] = useState()
  const [timeframe, setTimeframe] = useState(null)

  let _timeframe = null

  if (timeframe != null) {
    _timeframe = {
      start: timeframe[0],
      end: timeframe[1],
    }
  }

  return (
    <div className="main flex grow flex-col gap-5 bg-gradient-to-br from-pink-300 to-sky-300">
      <NavBar />
      <div className="flex justify-evenly align-middle mt-10">
        <TitleForm setTitle={setTitle} />
        <Cal setTimeframe={setTimeframe} />
      </div>
      <CreateMeeting title={title} timeframe={_timeframe} />
    </div>
  )
}
