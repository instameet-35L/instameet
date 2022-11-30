import React, { useState } from "react"
import "../css/FillSchedule.css"

/*
 * GroupGrid is a grid where you can look at all users availibility
 * - Need props to be passed
 */

//ASK PAUL TO RELOAD THE PAGE WHEN COLOR BUTTONS ARE CLICKED

function renderSwitch(colorBlue, i, numUsrsAvail) {
  switch(numUsrsAvail) {
    case 0:
      if(colorBlue)
      {
        return (
          <div className="groupEntry bg-blue-000">
            {i}
          </div>
        )
      }
      else
      {
        return (
          <div className="groupEntry bg-orange-000">
            {i}
          </div>
        )
      }

    case 1:
      if(colorBlue)
      {
        return (
          <div className="groupEntry bg-blue-100">
            {i}
          </div>
        )
      }
      else
      {
        return (
          <div className="groupEntry bg-orange-100">
            {i}
          </div>
        )
      }
    case 2:
      if(colorBlue)
      {
        return (
          <div className="groupEntry bg-blue-200">
            {i}
          </div>
        )
      }
      else
      {
        return (
          <div className="groupEntry bg-orange-200">
            {i}
          </div>
        )
      }
    case 3:
      if(colorBlue)
      {
        return (
          <div className="groupEntry bg-blue-300">
            {i}
          </div>
        )
      }
      else
      {
        return (
          <div className="groupEntry bg-orange-300">
            {i}
          </div>
        )
      }
    case 4:
      if(colorBlue)
      {
        return (
          <div className="groupEntry bg-blue-400">
            {i}
          </div>
        )
      }
      else
      {
        return (
          <div className="groupEntry bg-orange-400">
            {i}
          </div>
        )
      }
    case 5:
      if(colorBlue)
      {
        return (
          <div className="groupEntry bg-blue-500">
            {i}
          </div>
        )
      }
      else
      {
        return (
          <div className="groupEntry bg-orange-500">
            {i}
          </div>
        )
      }
    case 6:
      if(colorBlue)
      {
        return (
          <div className="groupEntry bg-blue-600">
            {i}
          </div>
        )
      }
      else
      {
        return (
          <div className="groupEntry bg-orange-600">
            {i}
          </div>
        )
      }
    case 7:
      if(colorBlue)
      {
        return (
          <div className="groupEntry bg-blue-700">
            {i}
          </div>
        )
      }
      else
      {
        return (
          <div className="groupEntry bg-orange-700">
            {i}
          </div>
        )
      }
    case 8:
      if(colorBlue)
      {
        return (
          <div className="groupEntry bg-blue-800">
            {i}
          </div>
        )
      }
      else
      {
        return (
          <div className="groupEntry bg-orange-800">
            {i}
          </div>
        )
      }
    default:
      if(colorBlue)
      {
        return (
          <div className="groupEntry bg-blue-900">
            {i}
          </div>
        )
      }
      else
      {
        return (
          <div className="groupEntry bg-orange-900">
            {i}
          </div>
        )
      }
  }
}

function renderGroupEntry(colorBlue, i, numUsrsAvail) {
  return (
    <div>
      <div>
        {renderSwitch(colorBlue, i, numUsrsAvail)}
      </div>
    </div>
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

function GroupGrid() {
  const [blue, setBlue] = useState(true)
  const dateEntries = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]  // put each date here
  const timeEntries = ["6:00 AM", "7:00 AM", "8:00 AM",
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", 
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    "9:00 PM", "10:00 PM"]

  const MakeMyGridDateRow = () => {
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

  const MakeMyGridRows = () => {
    let rows = []
    const numCols = 8 // would just need arathi's num from the calendar
    let timeI = 0
    let entryI = 0
    let numUsrsAvail = 0
    for (let r = 0; r < 17; r++) {
      let children = []
      for (let c = 0; c < numCols; c++) {
        if (c === 0)
        {
          children.push(renderTimeEntry(timeI, timeEntries))
          timeI++
        }
        else {
          children.push(renderGroupEntry(blue, entryI, numUsrsAvail))
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
    return rows
  }

  function changeColor(event){
    console.log("CHANGE COLOR")
    if(event.target.value === "blue")
    {
      setBlue(true)
      console.log(event.target.value + ":GOT BLUE");
    }
    else if(event.target.value === "orange")
    {
      setBlue(false)
      console.log(event.target.value + ":GOT ORANGE"); 
    } 
  }

  return (
    <div>
      <div className="status">{"Group availibility:"}</div>
      {/* <div>{startDate}</div> */}
      <div>{MakeMyGridDateRow()}</div>
      <div>{MakeMyGridRows()}</div>
      <br/>
      <div>
      <form>
        <fieldset>
          <legend>Please select the color to display on the grid:</legend>
          <label>Blue &nbsp;
            <input type="radio" name="color" value="blue" onChange={changeColor} defaultChecked/>
          </label>
          <br/>
          <label>Orange &nbsp;
            <input type="radio" name="color" value="orange" onChange={changeColor}/>
          </label>
        </fieldset>
      </form>

      </div>
    </div>
  )
}

export default GroupGrid