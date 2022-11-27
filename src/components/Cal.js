
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import Input from "./Input"
//this file implements the calendar component
//value is the date(s) selected by the user when they click

function Cal({myValue, setMyValue}) {
  const GetNumberOfDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    // One day in milliseconds
    const lengthOfDay = 1000 /* milliseconds */ * 60 /* seconds */ * 
                          60 /* minutes */ * 24 /* hours */;

    // Calculating the time difference between two dates
    const timeDifference = endDate.getTime() - startDate.getTime();
    
    // Calculating the no. of days between two dates
    const numDays = Math.round(timeDifference / lengthOfDay);

    return numDays;
  }
  return (
    <div className="main">
      <div>
        <form>
          {/* <label for="scheduleName">Please enter your event name below: </label> */}
          <br />
          <Input />
          {/* <input type="text" id="scheduleName" name="scheduleName"/> */}
        </form>
        <p>Please select a range of dates that is 14 days or less</p>
      </div>
      <div className="calendar">
        <Calendar
          onChange={setMyValue} //when a date is clicked
          value={myValue} //date = value
          selectRange={true} //can select a range of dates
          //allowPartialRange={true}
        />
      </div>
      <div>
        {GetNumberOfDays(myValue[0], myValue[1]) <= 14 ? 
        (<p>
           <span>Start:</span> {myValue[0].toDateString()}
           &nbsp;&nbsp;|&nbsp; &nbsp;
           <span>End:</span> {myValue[1].toDateString()}
           </p>) 
        : (myValue.length > 1 
              && (
                <div>
                  <p><span style={{color: "red"}}>ERROR: </span>
                  Please select a range that has 14 days or less</p>
                   {/* {setMyValue(null)}
                  {(myValue===null) ?
                    (console.log("HEY WE MADE IT NULL"))
                  : (console.log("UH OH"))} */}
                </div>
              ))}
          <br></br>
        {/* if error set value to null */}
      </div>
    </div>
  )
}

export default Cal
