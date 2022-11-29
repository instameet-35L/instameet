import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GroupGrid from "../components/GroupGrid"
import IndivGrid from "../components/IndivGrid"
import Login from "../components/Login"
import NavBar from "../components/NavBar"

export default function Meeting() {
  const meetingId = useParams().meetingId
  const [meeting, setMeeting] = useState(null)

  // Please don't use `setName`, that's handled by the login code
  const [name, setName] = useState(null)

  useEffect(() => {
    async function getMeeting(id) {
      const response = await fetch(`/api/meeting/get/${id}`)

      if (!response.ok) {
        return
      }

      const body = await response.json()

      setMeeting(body)
    }

    // Necessary to prevent race conditions caused by network responses arriving
    // out-of-order (see
    // https://beta.reactjs.org/apis/react/useEffect#fetching-data-with-effects)
    let fetched = false

    if (!fetched) {
      getMeeting(meetingId)
    }

    return () => {
      fetched = true
    }
  }, [meetingId, name])

  console.log([meeting, meetingId, name])

  return (
    <>
      <div className="content-center bg-[#FAF9F6] w-[100%]">
        {/* <div><NavBar/></div> */}
        <div className="pb-20">
          <NavBar />
        </div>
        <div className="flex flex-row space-x-2 justify-center">
          <div className="flex-grow: 1 flex-nowrap min-w-[33%]">
            <IndivGrid />
            <br />
            <Login setName={setName} meetingId={meetingId} />
          </div>
          {/* maybe add: <Board startDate={meeting.timeframe.start} /> */}
          <div className="flex-grow: 1 flex-nowrap min-w-[33%]">
            <GroupGrid />
          </div>
          <div className="flex-grow: 1 max-w-[20%] content-center">
            <fieldset>
              <legend>Select whose schedules to display:</legend>
              <div>
                <input type="checkbox" id="A" name="People" value="A" />
                <label htmlFor="A">Person A</label>
              </div>
              <div>
                <input type="checkbox" id="B" name="People" value="B" />
                <label htmlFor="B">Person B</label>
              </div>
            </fieldset>
            {/* {JSON.stringify(meeting)} */}
          </div>
        </div>
      </div>
    </>
  )
}
