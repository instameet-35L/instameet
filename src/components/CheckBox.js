import { useState, React } from "react"

export default function CheckBoxes({
  thisMeeting,
  displayUsers,
  setDisplayUsers,
}) {
  if (thisMeeting == null) {
    return
  }

  let nameList = []
  //loop through all users and creates a checkbox for each
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
        <legend>Select whose schedule to display:</legend>
        {nameList}
      </fieldset>
    </div>
  )
}

function AddBox({ username, displayUsers, setDisplayUsers }) {
    //force rerendering the page for checkbox bug
    const [forceUpdate, setForceUpdate] = useState(true)
    //no checkbox if no username
  if (username == null) {
    return
  }
  //if checkbox is clicked, update the display dictionary
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
        onChange={(event) => {  //call this when checkbox is checked or unchecked
          UpdateDisplay(event.target.checked)
          setForceUpdate((forceUpdate) => !forceUpdate)
        }}
        checked={displayUsers.get(username)}
      />
      <label htmlFor={`checkbox-${username}`}>&nbsp;{username}</label>
    </div>
  )
}
