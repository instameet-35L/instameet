import "./App.css"
import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import TestAPI from "./components/TestAPI"

//this file implements the calendar component
//value is the date(s) selected by the user when they click

/* 
  BUGS TO FIX:
  -how to unselect range and go back to a singular day
  -potentially use hooks to add another state variable to control this?
  -look into onChange function or allowPartialRange or selectRange to see why double click is required
*/

function App() {
  const [value, setValue] = useState(new Date())
  return (
    <div className="main">
      <div className="text-center">
        <h1>Instameet! 🤖</h1>
        <TestAPI />
      </div>
      {/* add text box to name the schedule here */}
      <div className="calendar">
        <Calendar
          onChange={setValue} //when a date is clicked
          value={value} //date = value
          selectRange={true} //can select a range of dates
        />
      </div>
      <div>
        {value.length > 1 ? ( //if more than one date is selected, should this be 1 or 0
          <p className="text-center">
            <span className="bold">Start:</span> {value[0].toDateString()}
            &nbsp;&nbsp;|&nbsp; &nbsp;
            <span className="bold">End:</span> {value[1].toDateString()}
          </p>
        ) : (
          //if 1 date is selected
          <p className="text-center">
            <span className="bold">Selected Date:</span> {value.toDateString()}
          </p>
        )}
      </div>
    </div>
  )
}

export default App
