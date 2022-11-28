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
    return (
        <button className="entry" onClick={(event) => {
            event.target.style.background =
            event.target.style.background === "skyblue" ? "white" : "skyblue"
            }} >
            {i}
        </button>
    )
  }

function renderDateEntry(i, dateEntries) {
    return (
      <div className="dateEntry">
        date
        {dateEntries[i]}
     </div>
    )
}

function renderTimeEntry(i, timeEntries) {
    return (
      <div className="dateEntry">
        {timeEntries[i]}
      </div>
    )
  }

function IndivGrid() {
    // const entries = Array(100).fill(null) // should this be array(100) or should there not be a specific sizE??
    const dateEntries = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]  // put each date here
    const timeEntries = ["6:00 AM", "7:00 AM", "8:00 AM",
      "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
      "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", 
      "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
      "9:00 PM", "10:00 PM"]
    
    const MakeGridDateRow = () => {
        // creating the row of dates below
        let dateRows = []
        let dateChildren = []
        const numCols = 8
        for (let c = 0; c < numCols; c++) {
            dateChildren.push(renderDateEntry(c, dateEntries))
        }
        dateRows.push(
            <div key={0} className="board-row">
                {dateChildren}
            </div>
        )
        return dateRows
    }
    const MakeGridRows = () => {
        let rows = []
        const numCols = 8 // would just need arathi's num from the calendar
        let timeI = 0
        let entryI = 0
        for (let r = 0; r < 17; r++) {
            let children = []
            for (let c = 0; c < numCols; c++) {
                if (c === 0)
                {
                    children.push(renderTimeEntry(timeI, timeEntries))
                    timeI++
                }
                else {
                    children.push(renderEntry(entryI))
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
        <div>
            <div className="status">{"Your availibility:"}</div>
            {/* <div>{startDate}</div> */}
            {/* <div className="dates">{dateChildren}</div> */}
            <div>{MakeGridDateRow()}</div>
            {/* <p>Test, above are the dates</p> */}
            <div>{MakeGridRows()}</div>
      </div>
    )
}

export default IndivGrid