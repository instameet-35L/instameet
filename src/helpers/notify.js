import { Store } from "react-notifications-component"
import "animate.css"

/**
 * Helper for creating a notification
 * @param {String} title
 * @param {String} message
 * @param {String} type For example, "success" or "warning". See
 * https://github.com/teodosii/react-notifications-component#options
 * @returns Nothing, the notification is rendered within the function
 */
export default function notify(title, message, type) {
  Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
      showIcon: true,
    },
  })
}
