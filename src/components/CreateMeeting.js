import { useState } from "react"
import { Navigate, redirect } from "react-router-dom"
import "../css/CreateMeeting.css"

export default function CreateMeeting({ title, timeframe, creator }) {
  const [meetingId, setMeetingId] = useState("")

  async function requestNewMeeting() {
    const newMeetingData = {
      meetingData: {
        title,
        timeframe,
        users: [creator],
      },
    }

    const response = await fetch("/api/meeting/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeetingData),
    })
    const data = await response.json()

    if (response.status !== 200) {
      console.log("uh oh")
    }

    setMeetingId(data._id)
  }

  return (
    <>
      {meetingId !== "" && meetingId !== undefined && (
        <Navigate to={`/${meetingId}`} />
      )}
      <button className="buttonMeeting" onClick={requestNewMeeting}>
        Create Meeting
      </button>
    </>
  )
}
