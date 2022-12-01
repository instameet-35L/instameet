import React, { useState } from "react"
import "../css/FillSchedule.css"

/*
 * GroupGrid is a grid where you can look at all users availibility
 * - Need to make it so that we use the allAvailsDict to generate a numUsrsAvail per entry and then display that
 * - CHECK NUMUSRAVAILABLE
 */

//allAvailsDict
/*
  -dictionary where key is entry grid cell number and value is list of user names

  */

function getAllAvails(meetingInfo, nameDispDict) {
  // meetingInfo.users is a list of the user structs
  // schema is under server/models/meeting.js
  let allAvail =
    {} /* allAvail is a dictionary-like object containing the grid entry 
                  as a key and a list of the name of users in that grid entry */
  for (let count = 0; count < meetingInfo.users.length; count++) {
    console.log(
      "===meetingInfo.users[count].name is " + meetingInfo.users[count].name
    )
    // console.log("===nameDispDict is " + nameDispDict)
    // if (nameDispDict[meetingInfo.users[count].name]) {
    // PUT BACK
    for (
      let innerCount = 0;
      innerCount < meetingInfo.users[count].available.length;
      innerCount++
    ) {
      let currEntry = meetingInfo.users[count].available[innerCount]
      if (currEntry in allAvail) {
        allAvail[currEntry].push(meetingInfo.users[count].name)
      } else {
        allAvail[currEntry] = [meetingInfo.users[count].name]
      }
    }
    // if the boolean associated with that name is true
    // meetingInfo.users[count].name is the name (string) of curr count usr
    // allAvail.push(meetingInfo.users[count].available) // !!! TEST // push that users availibility onto the availibility list
    // }    PUT BACK
  }
  return allAvail
}

function handleClick(allAvailsDict, cell) {
  if(allAvailsDict[cell] === undefined)
  {
    alert("No one is available at this time.")
    return
  }
  let message = ""
  let len = allAvailsDict[cell].length
  for(let i = 0; i < len; i++)
  {
    if(len >= 2 && i === len-1)
      message+="and "
    message+=allAvailsDict[cell][i]
    if(len === 2 && i === len-2)
    {
      message+=" "
    }
    else if(i !== len-1)
      message+=", "
  }
  if(len === 1)
    message+=" is "
  else
    message+= " are "
  message+= "available at this time."
  alert(message)
}

function renderSwitch(colorBlue, i, numUsrsAvail, allAvailsDict) {
  switch (numUsrsAvail) {
    case 0:
      if (colorBlue) {
        return (
          <button
            className="groupEntry bg-blue-000"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      } else {
        return (
          <button
            className="groupEntry bg-orange-000"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      }

    case 1:
      if (colorBlue) {
        return (
          <button
            className="groupEntry bg-blue-100"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      } else {
        return (
          <button
            className="groupEntry bg-orange-100"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      }
    case 2:
      if (colorBlue) {
        return (
          <button
            className="groupEntry bg-blue-200"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      } else {
        return (
          <button
            className="groupEntry bg-orange-200"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      }
    case 3:
      if (colorBlue) {
        return (
          <button
            className="groupEntry bg-blue-300"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      } else {
        return (
          <button
            className="groupEntry bg-orange-300"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      }
    case 4:
      if (colorBlue) {
        return (
          <button
            className="groupEntry bg-blue-400"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      } else {
        return (
          <button
            className="groupEntry bg-orange-400"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      }
    case 5:
      if (colorBlue) {
        return (
          <button
            className="groupEntry bg-blue-500"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      } else {
        return (
          <button
            className="groupEntry bg-orange-500"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      }
    case 6:
      if (colorBlue) {
        return (
          <button
            className="groupEntry bg-blue-600"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      } else {
        return (
          <button
            className="groupEntry bg-orange-600"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      }
    case 7:
      if (colorBlue) {
        return (
          <button
            className="groupEntry bg-blue-700"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      } else {
        return (
          <button
            className="groupEntry bg-orange-700"
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      }
    case 8:
      if (colorBlue) {
        return (
          <button
            className="groupEntry bg-blue-800 "
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      } else {
        return (
          <button
            className="groupEntry bg-orange-800 "
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      }
    default:
      if (colorBlue) {
        return (
          <button
            className="groupEntry bg-blue-900 "
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      } else {
        return (
          <button
            className="groupEntry bg-orange-900 "
            onClick={() => handleClick(allAvailsDict, i)}
          >
            {i}
          </button>
        )
      }
  }
}

// function renderGroupEntry(colorBlue, i, numUsrsAvail) {
//   return (
//     <div>
//       <div>
//         {renderSwitch(colorBlue, i, numUsrsAvail)}
//       </div>
//     </div>
//   )
// }

function renderDateEntry(i, dateEntries) {
  return <div className="dateEntry">{dateEntries[i]}</div>
}

function renderTimeEntry(i, timeEntries) {
  return <div className="dateEntry">{timeEntries[i]}</div>
}

export default function GroupGrid({ meetingInfo, nameDispDict }) {
  console.log("=====!!!Entered GroupGrid function")
  // console.log(nameDispDict)
  const [blue, setBlue] = useState(true)
  if (
    meetingInfo === null ||
    meetingInfo === undefined // ||
    // nameDispDict === null ||
    // nameDispDict === undefined
  ) {
    console.log("=======Early return from GroupGrid function cuz of null val")
    return
  }
  console.log("=======Got past null check in GroupGrid function")
  const allAvailsDict = getAllAvails(meetingInfo, nameDispDict) // this stores the grid entry as the key and a list of names of users that are available on that day

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
  const numDays = GetNumberOfDays(
    meetingInfo.timeframe.start,
    meetingInfo.timeframe.end
  )

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

  function getBestTime() {
    let currLargest = [] // currLargest represents the list of grid entries with the largest num of people available
    let finalLargest = [] // represents the list of times and dates with the largest num of people available
    let currLargestKey = 0
    // Loop below gets the list of grid entries that have the best availibility
    for (const [key, value] of Object.entries(allAvailsDict)) {
      if (value.length > allAvailsDict[currLargestKey].length) {
        currLargestKey = key
        currLargest = [key]
      } else if (value.length === allAvailsDict[currLargestKey].length) {
        currLargest.push(key)
      }
    }
    // Turn the list of grid entries with best availibility into corresponding dates and times
    currLargest = currLargest.slice(0, 5) // Don't want too many options, so choose first five
    let timeString = ""
    let dateString = ""
    for (const entry of currLargest) {
      let row = entry / numDays // floor fxn, returns row
      let col = entry % numDays
      timeString = timeEntries[row]
      dateString = dateEntries[col]
      finalLargest.push(dateString + " " + timeString)
    }
    return finalLargest
  }

  function MakeMyGridDateRow() {
    console.log("=====Entered MakeMyGridDateRows")
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

  function MakeMyGridRows() {
    console.log("=====Entered MakeMyGridRows")
    let rows = []
    let timeI = 0
    let entryI = 0
    let numUsrsAvail = 0
    for (let r = 0; r < 17; r++) {
      let children = []
      for (let c = 0; c <= numDays; c++) {
        if (c === 0) {
          children.push(renderTimeEntry(timeI, timeEntries))
          timeI++
        } else {
          if (entryI in allAvailsDict) {
            numUsrsAvail = allAvailsDict[entryI].length
          } else {
            numUsrsAvail = 0
          }
          children.push(renderSwitch(blue, entryI, numUsrsAvail, allAvailsDict))
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

  function changeColor(event) {
    console.log("CHANGE COLOR")
    if(event.target.value === "blue") //if button clicked was blue, display blue
    {
      setBlue(true)
      console.log(event.target.value + ":GOT BLUE");
    }
    else if(event.target.value === "orange")  //if button clicked was orange, display orange
    {
      setBlue(false)
      console.log(event.target.value + ":GOT ORANGE")
    }
  }

  return (
    <div>
      <div className="status">{"Group availability:"}</div>
      <div>{MakeMyGridDateRow()}</div>
      <div>{MakeMyGridRows()}</div>
      <br />
      <div>
        <form>
          <fieldset>
            <legend>Please select the color to display on the grid:</legend>
            <label>
              Blue &nbsp;
              <input
                type="radio"
                name="color"
                value="blue"
                onChange={changeColor}
                defaultChecked
              />
            </label>
            <br />
            <label>
              Orange &nbsp;
              <input
                type="radio"
                name="color"
                value="orange"
                onChange={changeColor}
              />
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
