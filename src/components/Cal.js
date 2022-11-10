import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import Input from "./Input"
//this file implements the calendar component
//value is the date(s) selected by the user when they click

/*
TO DO:
-Figure out how many days are in the range
-limit range size to 14 days
*/

function Cal() {
  const [value, setValue] = useState(new Date())
  const GetNumberOfDays = (start, end) => {
    const date1 = new Date(start)
    const date2 = new Date(end)

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime()

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay)

    return diffInDays
  }
  return (
    <div className="main">
      <div>
        <form>
          <label for="scheduleName">Please enter your event name below: </label>
          <br />
          <Input />
          {/* <input type="text" id="scheduleName" name="scheduleName"/> */}
        </form>
      </div>
      <div className="calendar">
        <Calendar
          onChange={setValue} //when a date is clicked
          value={value} //date = value
          selectRange={true} //can select a range of dates
          //allowPartialRange={true}
        />
      </div>
      <div>
        {value.length > 1 ? ( //every click after the first one
          ((
            <p className="text-center">
              <span className="bold">Start:</span> {value[0].toDateString()}
              &nbsp;&nbsp;|&nbsp; &nbsp;
              <span className="bold">End:</span> {value[1].toDateString()}
            </p>
          ),
          console.log(GetNumberOfDays(value[0], value[1])))
        ) : (
          //if the above print is >14, give error message
          //only at very beginning
          <p className="text-center">
            <span className="bold">Start:</span> {value.toDateString()}
            &nbsp;&nbsp;|&nbsp; &nbsp;
            <span className="bold">End:</span> {value.toDateString()}
          </p>
        )}
      </div>
    </div>
  )
}

export default Cal
