import React from "react"
import "../css/FillSchedule.css"

/*
 * Currently, FillSchedule is a grid where you can select your
 * availibility. Right now, you can select and unselect grid entries.
 * What needs to be changed:
 *   - Need to make it so that when a button is clicked, that info is
 *     passed to the backend
 */

/**
 * Add a user's available time to the database
 * @param {String} meetingId
 * @param {String} userName
 * @param {Number} timeIndex
 * @returns Meeting data as object or null if the fetch failed
 */
// Call the data base to add availibilities in backend
async function addAvailability(meetingId, userName, timeIndex) {
  if (userName == null) {
    return null
  }

  const response = await fetch(`/api/meeting/addAvailability/${meetingId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      timeIndex,
    }),
  })

  if (!response.ok) {
    return null
  }

  return await response.json()
}

/**
 * Remove a user's available time from the database
 * @param {String} meetingId
 * @param {String} userName
 * @param {Number} timeIndex
 * @returns Meeting data as object or null if the fetch failed
 */
async function removeAvailability(meetingId, userName, timeIndex) {
  if (userName == null) {
    return null
  }

  const response = await fetch(`/api/meeting/removeAvailability/${meetingId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      timeIndex,
    }),
  })

  if (!response.ok) {
    return null
  }

  return await response.json()
}

function TimeToggleCell({ id, meetingInfo, meetingId, name, setMeeting }) {
  // !! PUT BACK function renderEntry(i, meetingInfo, currUsrName)
  const NOT_AVAILABLE = "white"
  const AVAILABLE = "skyblue"

  const loggedInUser = meetingInfo.users.find((user) => user.name === name)

  // Check if the user is available at this time (represented by `id`)
  const available =
    loggedInUser != null ? loggedInUser.available.indexOf(id) !== -1 : false

  return (
    <button
      key={`time-${id}`}
      className="entry"
      style={{
        background: available ? AVAILABLE : NOT_AVAILABLE,
      }}
      onClick={(event) => {
        if (name == null) {
          return
        }

        if (
          event.target.style.background === NOT_AVAILABLE ||
          event.target.style.background === ""
        ) {
          addAvailability(meetingId, name, id).then((res) => {
            if (res != null) {
              setMeeting(res)
              event.target.style.background = AVAILABLE
            }
          })
        } else {
          removeAvailability(meetingId, name, id).then((res) => {
            if (res != null) {
              setMeeting(res)
              event.target.style.background = NOT_AVAILABLE
            }
          })
        }
      }}
    >
      {/* {id} */}
    </button>
  )
}

function DateOfColCell({ id, dateEntries }) {
  return (
    <div key={`date-${id}`} className="dateEntry">
      {dateEntries[id]}
    </div>
  )
}

function TimeOfRowCell({ id, timeEntries }) {
  return (
    <div key={`row-time-${id}`} className="dateEntry">
      {timeEntries[id]}
    </div>
  )
}

export default function IndivGrid({ meetingInfo, name, setMeeting }) {
  if (meetingInfo === null || meetingInfo === undefined) {
    return
  }

  function GetNumberOfDays(start, end) {
    const startDate = new Date(start)
    const endDate = new Date(end)

    // One day in milliseconds
    const lengthOfDay =
      1000 /* milliseconds */ *
      60 /* seconds */ *
      60 /* minutes */ *
      24 /* hours */
    // Calculating the time difference between two dates
    const timeDifference = endDate.getTime() - startDate.getTime()
    // Calculating the no. of days between two dates
    const numDays = Math.round(timeDifference / lengthOfDay)

    return numDays
  }

  function createDays(beginDate, numDays) {
    let startDate = new Date(beginDate)
    let datesArray = ["", startDate.toDateString().substring(4, 10)]
    // datesArray is a array of string dates // need chars 4-9 so [4, 10)
    let countNumDays = numDays - 1
    while (countNumDays > 0) {
      var result = startDate
      result.setDate(result.getDate() + 1)
      datesArray.push(result.toDateString().substring(4, 10))
      startDate = result
      countNumDays--
    }
    return datesArray
  }

  // const entries = Array(100).fill(null) // should this be array(100) or should there not be a specific sizE??
  let numDays = GetNumberOfDays(
    meetingInfo.timeframe.start,
    meetingInfo.timeframe.end
  )
  if (numDays > 9) {
    numDays = 9
  }

  const dateEntries = createDays(meetingInfo.timeframe.start, numDays)
  const timeEntries = [
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ]

  function DatesRow() {
    // creating the row of dates below
    let dateRows = []
    let dateChildren = []
    for (let c = 0; c <= numDays; c++) {
      dateChildren.push(<DateOfColCell id={c} dateEntries={dateEntries} />)
    }
    dateRows.push(<div className="board-row">{dateChildren}</div>)
    return dateRows
  }

  function makeGridRows() {
    let rows = [] // would just need arathi's num from the calendar
    let timeI = 0
    let entryI = 0
    for (let r = 0; r < 17; r++) {
      let children = []
      for (let c = 0; c <= numDays; c++) {
        if (c === 0) {
          children.push(<TimeOfRowCell id={timeI} timeEntries={timeEntries} />)
          timeI++
        } else {
          children.push(
            <TimeToggleCell
              id={entryI}
              meetingInfo={meetingInfo}
              meetingId={meetingInfo._id}
              name={name}
              setMeeting={setMeeting}
            />
          )
          entryI++
        }
      }

      rows.push(
        <div key={`row-${r}`} className="board-row">
          {children}
        </div>
      )
    }
    return rows
  }

  return (
    <>
      <div className="status">
        {"Please first register or login and then select your availability:"}
      </div>
      <DatesRow />
      <div>{makeGridRows()}</div>
    </>
  )
}
