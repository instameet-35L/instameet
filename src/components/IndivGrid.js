import React from "react"
import "../css/FillSchedule.css"

/*
 * Currently, FillSchedule is a grid where you can select your
 * availibility. Right now, you can select and unselect grid entries.
 * What needs to be changed:
 *   - Need to pass props so that the grid has the number of columns equal to
 *     the number of days chosen by the event creator.
 */

function renderEntry(i) {
  // !! PUT BACK function renderEntry(i, meetingInfo, currUsrName)
  return (
    <button
      className="entry"
      onClick={(event) => {
        event.target.style.background =
          event.target.style.background === "skyblue" ? "white" : "skyblue"
        // meetingInfo.users[currUsrName].available.push(i)    // !!! BROKEN RN // saves click to backend !!! PUT BACK
      }}
    >
      {i}
    </button>
  )
}

function renderDateEntry(i, dateEntries) {
  return <div className="dateEntry">{dateEntries[i]}</div>
}

function renderTimeEntry(i, timeEntries) {
  return <div className="dateEntry">{timeEntries[i]}</div>
}

export default function IndivGrid({ meetingInfo }) {
  if (meetingInfo === null || meetingInfo === undefined) {
    return
  }

  // IndivGrid(meetingInfo, currUsrName) !!! PUT BACK
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
    // !!! Need to test
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
  const numDays = GetNumberOfDays(
    meetingInfo.timeframe.start,
    meetingInfo.timeframe.end
  )

  // const dateEntries = ["", meetingInfo.timeframe.start, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]  // put each date here
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

  function MakeGridDateRow() {
    // creating the row of dates below
    let dateRows = []
    let dateChildren = []
    for (let c = 0; c <= numDays; c++) {
      dateChildren.push(renderDateEntry(c, dateEntries))
    }
    dateRows.push(
      <div key={0} className="board-row">
        {dateChildren}
      </div>
    )
    return dateRows
  }

  function MakeGridRows() {
    let rows = [] // would just need arathi's num from the calendar
    let timeI = 0
    let entryI = 0
    for (let r = 0; r < 17; r++) {
      let children = []
      for (let c = 0; c <= numDays; c++) {
        if (c === 0) {
          children.push(renderTimeEntry(timeI, timeEntries))
          timeI++
        } else {
          children.push(renderEntry(entryI)) // !!! PUT BACK children.push(renderEntry(entryI, meetingInfo, currUsrName))
          entryI++
        }
      }

      rows.push(
        <div key={r} className="board-row">
          {children}
        </div>
      )
    }
    return rows
  }

  return (
    <>
      <div className="status">{"Your availibility:"}</div>
      {/* <div>{startDate}</div> */}
      {/* <div className="dates">{dateChildren}</div> */}
      <div>{MakeGridDateRow()}</div>
      {/* <p>Test, above are the dates</p> */}
      <div>{MakeGridRows()}</div>
    </>
  )
}
