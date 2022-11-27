import React from "react"

export default function About() {
  return (
    <div className="about page">
    <div className="text-center text-lg">Welcome to Instameet!</div>
    <div>
      <p>
      Instameet is a service that can help you figure out common availability between multiple people.
      It allows one person (the event creator) to create a new schedule with a unique URL. They can
      then send out this link to people in a group. Each group member can then click on the link and
      fill out their own availability for the given dates (selected by the event creator). These 
      availabilities will be stored and displayed on the group grid, shown in the middle of the page.
      The checkboxes on the right hand side allow users to isolate specific members' availabilities.
      </p>
    </div>
    </div>
  )
}
