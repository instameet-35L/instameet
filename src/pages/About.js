import React from "react"
import NavBar from "../components/NavBar"

export default function About() {
  return (
    <div className="about page">
    <div className="content-center bg-[#FAF9F6] w-[100%]">
        {/* <div><NavBar/></div> */}
        <div className="pb-20">
          <NavBar />
        </div>
    <div className="text-center text-lg">Welcome to Instameet!</div>
    <div>
      <p>
      Instameet is a service that helps users figure out common availability between multiple people.
      It allows one person (the event creator) to create a new schedule with a unique URL. They can
      then send out this link to people in a group. Each group member can then click on the link and
      fill out their own availability for the given dates (selected by the event creator) after 
      they register for an account. This account will also enable users to receive notifications when
      a certain number of users have filled out their availability. These availabilities are stored 
      and displayed together on the group grid, shown in the middle of the page. The checkboxes on the 
      right hand side allow users to customize the group grid in order to isolate specific members' 
      availabilities. In order to improve accessibility, users can also customize the color palette of
      grid.
      </p>
    </div>
    </div>
    </div>
  )
}
