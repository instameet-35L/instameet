import React from "react"

export default function CheckBoxes({ thisMeeting, setDisplay }) {
  if (thisMeeting === null || thisMeeting === undefined) {
    return
  }

  // creates a checkbox for each user
  let nameList = []

  for (let i = 0; i < thisMeeting.users.length; i++) {
    const name = thisMeeting.users[i].name

    nameList.push(
      <AddBox
        username={thisMeeting.users[i].name}
        setDisplayUsers={setDisplay}
      />
    )

    setDisplay((prevDisplay) => {
      prevDisplay[name] = true
      return prevDisplay
    })
  }

  return (
    <div>
      <fieldset>
        <legend>Select whose schedules to display:</legend>
        {nameList}
      </fieldset>
    </div>
  )
}

function AddBox({ username, setDisplayUsers }) {
  if (username === null || username === undefined) {
    return
  }

  function UpdateDisplay(checked) {
    console.log(checked)
    setDisplayUsers((prevDisplay) => {
      prevDisplay[username] = checked
      return prevDisplay
    })

    console.log(`${username} is ${checked ? "checked" : "not checked"}`)
  }

  return (
    <div>
      <input
        type="checkbox"
        onChange={(event) => UpdateDisplay(event.target.checked)}
        defaultChecked
      />
      <label>&nbsp;{username}</label>
    </div>
  )
}
