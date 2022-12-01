import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GroupGrid from "../components/GroupGrid"
import IndivGrid from "../components/IndivGrid"
import Login from "../components/Login"
import NavBar from "../components/NavBar"
import CheckBoxes from "../components/CheckBox"

export default function Meeting() {
  const meetingId = useParams().meetingId
  const [meeting, setMeeting] = useState(null)

  // Please don't use `setName`, that's handled by the login code
  const [name, setName] = useState(null)
  //name gets set to current user's name
  //DON'T SET NAME NEVER CHANGE IT EVER EVER EVER
  //null -> no one is logged in
  //not null -> someone is logged in and changing their availability

  const [displayUsers, setDisplayUsers] = useState(null)
  //dictionary of all users mapped to a boolean of
  //whether they should be displayed in the group grid
  //if bool == true --> display
  //if bool == false --> don't display

  useEffect(() => {
    async function getMeeting(id) {
      const response = await fetch(`/api/meeting/get/${id}`)
      if (!response.ok) {
        return
      }

      const meetingData = await response.json()

      setMeeting(meetingData)

      let _displayUsers = new Map()

      for (const user of meetingData.users) {
        _displayUsers.set(user.name, true)
      }

      setDisplayUsers(_displayUsers)
    }

    // Necessary to prevent race conditions caused by network responses arriving
    // out-of-order (see
    // https://beta.reactjs.org/apis/react/useEffect#fetching-data-with-effects)
    let fetched = false

    if (!fetched) {
      getMeeting(meetingId)
    }

    return () => {
      fetched = true
    }
  }, [meetingId, name])

  console.log([meeting, meetingId, name, displayUsers])

  return (
    <>
      <div className="content-center bg-[#FAF9F6] grow">
        <div className="pb-7">
          <NavBar />
        </div>
        <div className="flex flex-row space-x-2 justify-evenly px-10">
          <div className="flex-grow: 1 flex-nowrap min-w-[40%]">
            {/* <IndivGrid meetingInfo={meeting} currUsrName={name}/> !!! PUT BACK */}
            <IndivGrid
              meetingInfo={meeting}
              name={name}
              setMeeting={setMeeting}
            />
            <br />
            <Login name={name} setName={setName} meetingId={meetingId} />
            {/* ABOVE CORRECT? NOTE: !!! BROKEN  took out startDay={meeting.timeframe.start} */}
          </div>
          <div className="flex-grow: 1 flex-nowrap min-w-[40%]">
            {/* {console.log("displayUsers is" + displayUsers)} */}
            {console.log("displayUsers just before group grid is")}
            {console.log(displayUsers)}
            <GroupGrid meetingInfo={meeting} nameDispDict={displayUsers} />
            {/* ABOVE BROKEN RN. NEED TO MAKE WORK!!! */}
          </div>
          <div className="flex-grow: 1 max-w-[20%] content-center">
            <div>
              <CheckBoxes
                thisMeeting={meeting}
                displayUsers={displayUsers}
                setDisplayUsers={setDisplayUsers}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/*
ARATHI'S CHECKBOX NOTES:
setPersonInfo(prevPersonInfo => ({...prevPersonInfo, firstName: "name"}))

-set state completely gets rid of old state and makes an entirely new one
-to update an object, need to pass in the entire original object with just the one
change
-prevPersonInfo is a local variable set equal to personInfo (the state variable)
-arrow is anonymous function
-they are passing a function describing how to change the object
  function updatePerson(prevPersonInfo) 
    { return {...prevPersonInfo, firstName: "name"} }
    - ... takes prevPersonInfo and saves everything about except for firstName : name
    -sets personInfo to prevPersonInfo with firstName:"name" instead of firstName:""
    BEFORE:
    {
      firstName: “”,
      lastName: “”
    }
    AFTER:
    {
      firstName: “name”,
      lastName: “”
    }

What we want to do:
-dictionary mapping user's names to bool of display =true or display = false
-when hook is created, it will be an empty dictionary
-const [nameDict, setNameDict] = useState(null) //initial declaration in the meeting component
-in return, call a checkbox component in this same file
-loop through all users and create a checkbox for each one
-within meeting function, add the names to the dictonary
    -inside useEffect
    -constantly loop through meeting users and 
-pass state variables to checkbox similar to calendar
    -name of user of checkbox
    -setter function of name dictionary
*/
