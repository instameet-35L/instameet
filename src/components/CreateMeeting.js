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
      setIsValid(false)
    }

    setMeetingId(data._id)
  }

  return (
    <div class="flex flex-col items-center space-y-5">
      {meetingId !== null && meetingId !== undefined && (
        <Navigate to={`/${meetingId}`} />
      )}
      <button
        class="text-base font-medium rounded-lg p-3 bg-cyan-600 text-white w-max"
        onClick={requestNewMeeting}
      >
        Create Meeting
      </button>
      {!isValid && (
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <p class="font-bold">u done messed up ur input</p>
        </div>
      )}
    </div>
  )
}
