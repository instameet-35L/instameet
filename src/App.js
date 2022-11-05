import "./App.css"
import React from "react"
import Cal from "./setupCal.js"

function App() {
  return (
    <div className="main">
      <div className="text-center">
        <h1 align="center">Instameet! 🤖</h1>
        <a href="localhost:3000">
          <div className="logo" href="../"></div>
        </a>
        {/* <a href="localhost:3000"><img src="/instameet-logo.jpeg" alt="Instameet Logo" width="200" height="300" /></a> */}
      </div>
      <div>
        <Cal />
      </div>
    </div>
  )
}

export default App
