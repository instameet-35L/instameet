import { useState, React } from "react"

export default function CheckBoxes({
  thisMeeting,
  displayUsers,
  setDisplayUsers,
}) {
  if (thisMeeting == null) {
    return
  }

  // creates a checkbox for each user
  let nameList = []

  for (let i = 0; i < thisMeeting.users.length; i++) {
    const name = thisMeeting.users[i].name

    nameList.push(
      <AddBox
        username={name}
        displayUsers={displayUsers}
        setDisplayUsers={setDisplayUsers}
      />
    )
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

function AddBox({ username, displayUsers, setDisplayUsers }) {
  const [forceUpdate, setForceUpdate] = useState(true)

  if (username == null) {
    return
  }

  function UpdateDisplay(checked) {
    setDisplayUsers((display) => {
      display.set(username, checked)
      return display
    })
  }

  return (
    <div>
      <input
        key={`${username}`}
        type="checkbox"
        id={`checkbox-${username}`}
        onChange={(event) => {
          UpdateDisplay(event.target.checked)
          setForceUpdate((forceUpdate) => !forceUpdate)
        }}
        checked={displayUsers.get(username)}
      />
      <label htmlFor={`checkbox-${username}`}>&nbsp;{username}</label>
    </div>
  )
}
