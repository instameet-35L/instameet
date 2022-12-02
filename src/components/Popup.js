import React, { useState } from "react"
// import { useEffect, useState } from "react"
import "../css/Popup.css"

/**
 *
 * @param {*} props: totalAmount, howManyHaveSignedUp
 * @returns
 */

const CloseButton = () => (
  <div className="close">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-x"
      // {...props}
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  </div>
)

export default function Popup({ meeting1, bestTime }) {
  const [show, setShow] = useState(true)

  if (meeting1 === null) {
    return <></>
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   fetch("localhost:3000/api/meeting/", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: meeting1._id,
  //       bestTime: "Dec 1",
  //     }),
  //   })
  // }, [meeting1._id])
  //useState(meeting1.users.length >= 3 ? true : false)
  // if(meeting1.users.length>=3)
  // {
  //     setShow=true
  // }
  // else{
  //     setShow=false
  // }
  // = useState(meeting1.users.length >= 3 ? true : false)

  let bestTimesContent =
    bestTime == null
      ? "No times filled out yet. You have no friends!"
      : `${bestTime.toString()} ${
          bestTime.length === 1 ? "is the best time" : "are the best times"
        }`

  return (
    <div>
      {show && (
        <div className="wrapper">
          <div className="notification_wrapper">
            Meeting Information:
            <div
              onClick={() => {
                setShow(!show)
              }}
            >
              <CloseButton />
            </div>
          </div>
          <div className="contentfraction">
            {`${meeting1.users.length} ${
              meeting1.users.length === 1 ? "person has" : "people have"
            } filled their availability`}
          </div>
          <div className="contenttime">{bestTimesContent}</div>
        </div>
      )}
    </div>
  )
}
