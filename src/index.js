import React from "react"
import ReactDOM from "react-dom/client"
import "./css/index.css"
import Home from "./pages/Home"
import Meeting from "./pages/Meeting"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:meetingId" element={<Meeting />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
