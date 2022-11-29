import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function CreateMeeting({ title, timeframe, creator }) {
  const [meetingId, setMeetingId] = useState(null)
  const [isValid, setIsValid] = useState(true)

  async function requestNewMeeting() {
    const newMeetingData = {
      meetingData: {
        title,
        timeframe,
      },
    }

    const response = await fetch("/api/meeting/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeetingData),
    })

    if (!response.ok) {
      setIsValid(false)
      return
    }

    const data = await response.json()

    setMeetingId(data._id)
  }

  return (
    <div className="flex flex-col items-center space-y-5">
      {meetingId !== null && meetingId !== undefined && (
        <Navigate to={`/${meetingId}`} />
      )}
      <button
        className="text-base font-medium rounded-lg p-3 bg-cyan-600 text-white w-max"
        onClick={requestNewMeeting}
      >
        Create Meeting
      </button>
      {!isValid && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <p className="font-bold">Invalid input</p>
        </div>
      )}
    </div>
  )
}
