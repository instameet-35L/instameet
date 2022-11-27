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
    {/* <div className="flex flex-row basis=1/3">
      <Game/>
    </div>
    <div className="flex flex-row basis=1/3">{JSON.stringify(meeting)}</div> */}
    <div className="text-center content-center justify-evenly">
    <div className="text-lg">INSERT NAV BAR HERE</div>
    <div className="flex flex-row space-x-2">
      <div className="flex-grow: 1 flex-nowrap min-w-[33%]"><Board/></div>
      <div className="flex-grow: 1 flex-nowrap min-w-[33%]"><Board/></div>
      <div className="flex-grow: 1 max-w-[20%]">
        <fieldset>
        <legend>Choose whose schedules to display:</legend>
            <div>
              <input type="checkbox" id="scales" name="scales"/>
              <label for="scales">Scales</label>
            </div>

            <div>
              <input type="checkbox" id="horns" name="horns"/>
              <label for="horns">Horns</label>
            </div>
        </fieldset>
        {JSON.stringify(meeting)}
        </div>
    </div>
    </div>
    </>
  )
}
