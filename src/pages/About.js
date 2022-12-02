import React from "react"
import NavBar from "../components/NavBar"

export default function About() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-300 to-sky-300 w-[100%]">
      <NavBar />
      <div className="flex flex-col items-center gap-5 m-5">
        <div className="text-center tracking-wider text-2xl">
          Welcome to Instameet!
        </div>
        <div className="px-20 max-w-prose">
          <p>
            Instameet is a service that helps users figure out common
            availability between multiple people. It allows one person (the
            event creator) to create a new schedule with a unique URL. They can
            then send out this link to people in a group. Each group member can
            then click on the link and fill out their own availability for the
            given dates (selected by the event creator) after they register for
            an account. This account will also enable users to receive
            notifications when a certain number of users have filled out their
            availability. These availabilities are stored and displayed together
            on the group grid, shown in the middle of the page. The checkboxes
            on the right hand side allow users to customize the group grid in
            order to isolate specific members' availabilities. In order to
            improve accessibility, users can also customize the color palette of
            grid.
          </p>
        </div>
      </div>
    </div>
  )
}
