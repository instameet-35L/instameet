import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GroupGrid from "../components/GroupGrid"
import IndivGrid from "../components/IndivGrid"
import Login from "../components/Login"
import NavBar from "../components/NavBar"

export default function Meeting() {
  const meetingId = useParams().meetingId
  const [meeting, setMeeting] = useState(null)

  // Please don't use `setName`, that's handled by the login code
  const [name, setName] = useState(null)
  //name gets set to current user's name
  //DON'T SET NAME NEVER CHANGE IT EVER EVER EVER
  //null -> no one is logged in
  //not null -> someone is logged in and changing their availability

  const [nameDict, setNameDict] = useState(null)
  //dictionary of all users mapped to a boolean of
  //whether they should be displayed in the group grid
  //if bool == true --> display
  //if bool == false --> don't display

  useEffect(() => {
    async function getMeeting(id) {
      console.log("god help me")
      const response = await fetch(`/api/meeting/get/${id}`)

      if (!response.ok) {
        return
      }

      const body = await response.json()

      setMeeting(body)
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

    // createDict()
  }, [meetingId, name])

  console.log([meeting, meetingId, name])

  // function makeBoxes(){  //creates a checkbox for each user
  //   let nameList = []
  //   for(let i = 0; i < meeting.users.length; i++)
  //   {
  //     nameList.push(<Checkboxes username={meeting.users[i].name}
  //                               setDict={setNameDict}/>)
  //   }

  //   return(
  //     <div>
  //       {nameList}
  //     </div>
  //   )
  // }

  // function createDict(){ //fills nameDict with current users
  //   if(meeting===null)
  //     return
  //   for(let i = 0; i < meeting.users.length; i++)
  //   {
  //     let username = meeting.users[i].name
  //     setNameDict(prevState => ({...prevState, username: true}))
  //   }
  // }

  return (
    <>
      <div className="content-center bg-[#FAF9F6] w-[100%]">
        {/* <div><NavBar/></div> */}
        <div className="pb-7">
          <NavBar />
        </div>
        <div className="flex flex-row space-x-2 justify-evenly px-10">
          <div className="flex-grow: 1 flex-nowrap min-w-[40%]">
            {/* <IndivGrid meetingInfo={meeting} currUsrName={name}/> !!! PUT BACK */}
            <IndivGrid meetingInfo={meeting} />
            <br />
            <Login setName={setName} meetingId={meetingId} />
            {/* ABOVE CORRECT? NOTE: !!! BROKEN  took out startDay={meeting.timeframe.start} */}
          </div>
          {/* maybe add: <Board startDate={meeting.timeframe.start} /> */}
          <div className="flex-grow: 1 flex-nowrap min-w-[40%]">
            <GroupGrid nameDict={nameDict} />
            {/* ABOVE BROKEN RN. NEED TO MAKE WORK!!! */}
          </div>
          <div className="flex-grow: 1 max-w-[20%] content-center">
            <fieldset>
              <legend>Select whose schedules to display:</legend>
              <div>
                <input type="checkbox" id="A" name="People" value="A" />
                <label htmlFor="A">Person A</label>
              </div>
              <div>
                <input type="checkbox" id="B" name="People" value="B" />
                <label htmlFor="B">Person B</label>
              </div>
              {/* {makeBoxes()} */}
            </fieldset>
            {/* {JSON.stringify(meeting)} */}
          </div>
        </div>
      </div>
    </>
  )
}

function Checkboxes({ username, setDict }) {
  const UpdateDisplay = () => {
    if (this.checked) {
      //if check
      console.log(username + "IS CHECKED")
      setDict((prevState) => ({ ...prevState, username: true }))
    } else {
      console.log(username + "IS UNCHECKED")
      setDict((prevState) => ({ ...prevState, username: false }))
    }
  }
  return (
    <div>
      <input type="checkbox" onChange={UpdateDisplay} />
      <label>{username}</label>
    </div>
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
