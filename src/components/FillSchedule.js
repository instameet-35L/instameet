import React from "react"
import "../css/FillSchedule.css"

/*
 * Currently, FillSchedule is a grid where you can select your
 * availibility. Right now, you can select and unselect grid entries.
 * What needs to be changed:
 *   - Need to add dates at top of grid corresponding to dates chosen
 *     by event creator.
 *   - Need to make the grid dynamically allocated so that the grid has the
 *     number of columns equal to the number of days chosen by the event creator.
 *   - Need to change how grid displays when a user selects it so that instead
 *     of containing an 'X' when selected, it will change color or something
 *     along that style.
 */

function Entry(props) {
  return (
    <button className="entry" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function DateEntry(props) {
  return (
    <div className="dateEntry">
      date
      {props.value1}
    </div>
  )
}

function TimeEntry(props) {
  return <div className="dateEntry">{props.value2}</div>
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: Array(100).fill(null), // should this be array(100) or should there not be a specific sizE??
      dateEntries: ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // put each date here
      timeEntries: [
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
      ],
    }
  }

  // handleClick(i) {
  //   console.log("clicked!")
  //   const entries = this.state.entries.slice()
  //   this.state.entries[i] === null ? (entries[i] = "X") : (entries[i] = null)
  //   this.setState({
  //     entries: entries,
  //   })
  // }

  renderEntry(i) {
    return (
      <Entry
        value={i}
        onClick={(event) => {
          event.target.style.background =
            event.target.style.background === "skyblue" ? "white" : "skyblue"
        }}
      />
    )
  }

  renderDateEntry(i) {
    return <DateEntry value1={this.state.dateEntries[i]} />
  }

  renderTimeEntry(i) {
    return <TimeEntry value2={this.state.timeEntries[i]} />
  }

  render() {
    const status = "Your availibility:"
    let rows = []
    let dateRows = []
    const numCols = 8 // would just need arathi's num from the calendar
    let dateChildren = []
    let timeI = 0
    let entryI = 0
    for (let r = 0; r < 17; r++) {
      let children = []
      let scale = r * numCols
      for (let c = 0 + scale; c < numCols + scale; c++) {
        if ((c + scale) % scale === 0 || c === 0) {
          children.push(this.renderTimeEntry(timeI))
          timeI++
        } else {
          children.push(this.renderEntry(entryI))
          entryI++
        }
      }

      rows.push(
        <div key={r} className="board-row">
          {children}
        </div>
      )
    }
    // creating the row of dates below
    for (let c = 0; c < numCols; c++) {
      dateChildren.push(this.renderDateEntry(c))
    }
    dateRows.push(
      <div key={0} className="board-row">
        {dateChildren}
      </div>
    )

    // let dateChildren = []
    // for (let dc = 0; dc < numCols; dc++)
    // {
    //   dateChildren.push(
    //     <div key={dc} className="dates"></div>
    //   )
    // }

    return (
      <div className="">
        <div className="status">{status}</div>
        {/* <div>{startDate}</div> */}
        {/* <div className="dates">{dateChildren}</div> */}
        <div className="inline-block w-20 h-20 overflow-scroll whitespace-nowrap">
          {dateRows}
        </div>
        {/* <p>Test, above are the dates</p> */}
        <div>{rows}</div>
      </div>
    )
  }
}

export default Board

/*CONCERNS
- I need to use some sort of onClick() thing, but I am not sure
if we want users to be able to drag their availibity or if they
would have to click each box (each hr) of their availibility
- I need to get data from the setupCal (I need to see how many
days the event planner chose; how do I do this?)
- Need to make box change color when its selected
*/
// How do i get this to displayyyyyyy...
