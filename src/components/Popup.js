import React, { useState } from "react"
// import { useEffect, useState } from "react"
import "../css/Popup.css"

/**
 *
 * @param {*} props: totalAmount, howManyHaveSignedUp
 * @returns
 */

const CloseButton = (props) => (
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
            {...props}
        >
            <path d="M18 6 6 18M6 6l12 12" />
        </svg>
    </div>
)

const Popup = (props) => {
    const [show, setShow] = useState(props.registered >= 5 ? true : false)
    // if (props.registered === null) {
    //     return <></>
    // }
    return (
        <div>
            {show && (
                <div className="wrapper">
                    <div className="notification_wrapper">
                        Notification:
                        <div onClick={() => { setShow(!show) }}>
                            <CloseButton />
                        </div>
                    </div>
                    <div className="contentfraction">
                        {props.registered} people have filled their availability
                    </div>
                    {/* <div className="contenttime">{props.time} is the best time</div> */}
                </div>
            )}
        </div>
    )
}

export default Popup