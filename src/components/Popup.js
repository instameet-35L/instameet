import React from "react";
// import { useEffect, useState } from "react"
import '../css/Popup.css'

/**
 * 
 * @param {*} props: totalAmount, howManyHaveSignedUp
 * @returns 
 */

const Popup = (props) => {

    return (
        <div>
            <div className="wrapper">
                <div className="notification_wrapper">
                    Notification:      
                    
                </div>
                <div className="contentfraction">
                    {props.registered} people have filled their availability
          
                </div>
                <div className ="contenttime">
                    {props.time} is the best time
                </div>
                <div className="button bg-blue-400">
                   Done
                </div>
            </div>
        </div>
    )
}

export default Popup;



