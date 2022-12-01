import { useState } from "react"
import Calendar from "react-calendar"
import notify from "./Notify.js"
import "react-calendar/dist/Calendar.css"

const MAX_DAYS = 9

export default function Cal({ setTimeframe }) {
  const [_timeframe, set_timeframe] = useState(null)

  function numDays(start, end) {
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

  /**
   * Sets the timeframe for the parent component (dateRange is only used
   * by this component, since it isn't validated) and notifies if the date range
   * is too large.
   * @param {[Date, Date]} value Since `selectRange` is enabled in the
   * `Calendar` component, changing the calendar results in an array being
   * returned instead of a single `Date`.
   */
  function handleCalendarChange(value) {
    set_timeframe(value)

    if (numDays(value[0], value[1]) <= MAX_DAYS) {
      setTimeframe(value)
    } else {
      setTimeframe(null)
      notify(
        "Error",
        `Please select a range with ${MAX_DAYS} days or less`,
        "warning"
      )
    }
  }

  return (
    <div className="flex flex-col content-center gap-3">
      <div className="text-center">
        Select a range of dates with {`${MAX_DAYS}`} days or less
      </div>
      <div className="self-center">
        <Calendar
          onChange={handleCalendarChange}
          value={_timeframe}
          selectRange={true}
        />
      </div>
      <div className="self-center">
        {_timeframe != null && (
          <>
            <p>Start: {_timeframe[0].toDateString()}</p>
            <p>End: {_timeframe[1].toDateString()}</p>
          </>
        )}
      </div>
    </div>
  )
}
