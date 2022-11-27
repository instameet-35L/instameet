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

/*==========================MANAGING DIFF COLORS OF GROUP ENTRIES BELOW=============================*/

function GroupEntry(props) {
  return (
    <div className="groupEntry bg-blue-000">
      {props.value}
    </div>
  )
}
// 100, 300, 400, 500, 700, 800

function GroupEntry100(props) {
  return (
    <div className="groupEntry bg-blue-100">
      {props.value}
    </div>
  )
}

function GroupEntry200(props) {
  return (
    <div className="groupEntry bg-blue-200">
      {props.value}
    </div>
  )
}

function GroupEntry300(props) {
  return (
    <div className="groupEntry bg-blue-300">
      {props.value}
    </div>
  )
}

function GroupEntry400(props) {
  return (
    <div className="groupEntry bg-blue-400">
      {props.value}
    </div>
  )
}

function GroupEntry500(props) {
  return (
    <div className="groupEntry bg-blue-500">
      {props.value}
    </div>
  )
}

function GroupEntry600(props) {
  return (
    <div className="groupEntry bg-blue-600">
      {props.value}
    </div>
  )
}

function GroupEntry700(props) {
  return (
    <div className="groupEntry bg-blue-700">
      {props.value}
    </div>
  )
}

function GroupEntry800(props) {
  return (
    <div className="groupEntry bg-blue-800">
      {props.value}
    </div>
  )
}

function GroupEntry900(props) {
  return (
    <div className="groupEntry bg-blue-900">
      {props.value}
    </div>
  )
}

/*==========================MANAGING DIFF COLORS OF GROUP ENTRIES ABOVE=============================*/


function DateEntry(props) {
  return (
    <div className="dateEntry">
      date
      {props.value1}
    </div>
  )
}

function TimeEntry(props) {
  return (
    <div className="dateEntry">
      {props.value2}
    </div>
  )
}

class GroupBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groupEntries: Array(100).fill(null), // should this be array(100) or should there not be a specific sizE??
      dateEntries: ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],  // put each date here
      timeEntries: ["6:00 AM", "7:00 AM", "8:00 AM",
        "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
        "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", 
        "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
        "9:00 PM", "10:00 PM"]
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

  renderSwitch(numUsrsAvail, i) {
    switch(numUsrsAvail) {
      case 0:
        return (
        <GroupEntry
          value={i}
        />
        )
      case 1:
        return (
        <GroupEntry100
          value={i}
        />
        )
      case 2:
        return (
        <GroupEntry200
          value={i}
        />
        )
      case 3:
        return (
        <GroupEntry300
          value={i}
        />
        )
      case 4:
        return (
        <GroupEntry400
          value={i}
        />
        )
      case 5:
        return (
        <GroupEntry500
          value={i}
        />
        )
      case 6:
        return (
        <GroupEntry600
          value={i}
        />
        )
      case 7:
        return (
        <GroupEntry700
          value={i}
        />
        )
      case 8:
        return (
        <GroupEntry800
          value={i}
        />
        )
      default:
        return (
          <GroupEntry900
            value={i}
          />
          )
    }
  }

  renderGroupEntry(i, numUsrsAvail) {
    return (
      <div>
        <div>
          {this.renderSwitch(numUsrsAvail, i)}
        </div>
        {/* <GroupEntry
          value={i}
          colorScale={numUsrsAvail}
        /> */}
      </div>
    )
  }

  renderDateEntry(i) {
    return (
      <DateEntry
        value1={this.state.dateEntries[i]}
      />
    )
  }

  renderTimeEntry(i) {
    return (
      <TimeEntry
        value2={this.state.timeEntries[i]}
      />
    )
  }

  render() {
    const status = "Group availibility:"
    let rows = []
    let dateRows = []
    const numCols = 8 // would just need arathi's num from the calendar
    let dateChildren = []
    let timeI = 0
    let entryI = 0
    let numUsrsAvail = 0
    // let colorArray = [[1, 2, 3], 
    //                   [4, 5, 6]]
    for (let r = 0; r < 17; r++) {
      let children = []
      // let scale = r * numCols
      for (let c = 0; c < numCols; c++) {
        if (c === 0) // (c + scale) % scale === 0 || 
        {
          children.push(this.renderTimeEntry(timeI))
          timeI++
        }
        else {
          children.push(this.renderGroupEntry(entryI, numUsrsAvail)) // 5*r + c // , colorArray[r][c] 
          entryI++
          numUsrsAvail++
        }
      }

      rows.push(
          <div key={r} className="board-row">
            {children}
          </div>
      )
      numUsrsAvail++
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

    return (
        <div>
          <div className="status">{status}</div>
          {/* <div>{startDate}</div> */}
          {/* <div className="dates">{dateChildren}</div> */}
          <div>{dateRows}</div>
          {/* <p>Test, above are the dates</p> */}
          <div>{rows}</div>
        </div>
      )
    }
  }
  
  export default GroupBoard
  
  /*CONCERNS
  - I need to use some sort of onClick() thing, but I am not sure
  if we want users to be able to drag their availibity or if they
  would have to click each box (each hr) of their availibility
  - I need to get data from the setupCal (I need to see how many
  days the event planner chose; how do I do this?)
  - Need to make box change color when its selected
  */
  // How do i get this to displayyyyyyy...
  