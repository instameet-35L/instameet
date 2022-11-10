import "./Home.css"
import React from "react"
import Cal from "./setupCal.js"
import TestAPI from "./components/TestAPI"
import ScheduleCreator from "./components/MeetingCreator"

export default function Home() {
  return (
    <div className="main">
      <div className="text-center">
        <h1 align="center">Instameet! 🤖</h1>
        <TestAPI />
        <a href="localhost:3000">
          <div className="logo" href="../"></div>
        </a>
        <a href="localhost:3000">
          <img
            src="/instameet-logo.jpeg"
            alt="Instameet Logo"
            width="200"
            height="300"
          />
        </a>
      </div>
      <div>
        <ScheduleCreator />
      </div>
    </div>
  )
}
