import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Meeting from "./pages/Meeting"
import About from "./pages/About"

import { ReactNotifications } from "react-notifications-component"

import "./css/index.css"
import "react-notifications-component/dist/theme.css"
import "animate.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ReactNotifications />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:meetingId" element={<Meeting />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
