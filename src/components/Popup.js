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

export default function Popup({ meeting1, time }) {
  const [show, setShow] = useState(true)
  if (meeting1 === null) {
    return <></>
  }
  //useState(meeting1.users.length >= 3 ? true : false)
  // if(meeting1.users.length>=3)
  // {
  //     setShow=true
  // }
  // else{
  //     setShow=false
  // }
  // = useState(meeting1.users.length >= 3 ? true : false)

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
            {meeting1.users.length} people have filled their availability
          </div>
          <div className="contenttime">{time} is the best time</div>
        </div>
      )}
    </div>
  )
}
