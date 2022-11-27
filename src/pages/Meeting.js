import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Board from "../components/FillSchedule" //grid component for individuals

export default function Meeting() {
  const meetingId = useParams().meetingId
  const [meeting, setMeeting] = useState(null)

  useEffect(() => {
    async function getMeeting(id) {
      const response = await fetch(`/api/meeting/id/${id}`)
      const body = await response.json()

      setMeeting(body)
    }

    if (!meeting) {
      getMeeting(meetingId)
    }
  })

  return (
    <>
    <div className="content-center">
    <div className="text-center text-lg">INSERT NAV BAR HERE</div>
    <div className="flex flex-row space-x-2 justify-center">
      <div className="flex-grow: 1 flex-nowrap min-w-[33%]"><Board/></div>
      <div className="flex-grow: 1 flex-nowrap min-w-[33%]"><Board/></div>
      <div className="flex-grow: 1 max-w-[20%] content-center">
        <fieldset>
        <legend>Select whose schedules to display:</legend>
            <div>
              <input type="checkbox" id="A" name="People" value="A"/>
              <label for="A">Person A</label>
            </div>
            <div>
              <input type="checkbox" id="B" name="People" value="B"/>
              <label for="B">Person B</label>
            </div>
        </fieldset>
        {JSON.stringify(meeting)}
        </div>
    </div>
    </div>
    </>
  )
}
