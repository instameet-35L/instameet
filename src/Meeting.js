import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Meeting() {
  const meetingId = useParams().meetingId
  const [meeting, setMeeting] = useState(null)

  useEffect(() => {
    async function getMeeting(id) {
      const response = await fetch(`/api/meeting/${id}`)
      const body = await response.json()
      console.log(`body: ${body}`)

      setMeeting(body)
    }

    if (!meeting) {
      getMeeting(meetingId)
    }
  })

  return (
    <>
      <div>{JSON.stringify(meeting)}</div>
    </>
  )
}
