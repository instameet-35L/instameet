import "./App.css"
//import Calendar from "./calendar.js"
import React, { useState } from 'react';
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

function App() {
  const [value, setValue] = useState(new Date());
  return (
    <div className="main">
      <div className='text-center'>
        <h1 align='center'>Instameet! 🤖</h1>
      </div>
      <h1 className='text-center'>React Calendar with Range</h1>
      <div className='calendar'>
        <Calendar 
              onChange={setValue} 
              value={value} 
              selectRange={true}/>
      </div>
      <div>
        {value.length > 0 ? (
          <p className='text-center'>
            <span className='bold'>Start:</span>{' '}{value[0].toDateString()}
            &nbsp;&nbsp;|&nbsp; &nbsp;
            <span className='bold'>End:</span>{' '}{value[1].toDateString()}
          </p>
        ) : (
          <p className='text-center'>
            <span className='bold'>Selected Date(s):</span>{' '}{value.toDateString()}
          </p>
        )}
      </div>

    </div>
  )
}

export default App
