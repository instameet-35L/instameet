import "./App.css"
import React from 'react';
import Cal from './setupCal.js';

function App() {
  return (
    <div className="main">
      <div className='text-center'>
        <h1 align='center'>Instameet! 🤖</h1>
      </div>
      <div>
        <Cal/>
      </div>
    </div>
  )
}

export default App
