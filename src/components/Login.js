import { useState } from "react"
import notify from "../helpers/notify"

export default function Login({ name, setName, meetingId }) {
  const [formValue, setFormValue] = useState(null)

  async function registerOrLogin() {
    if (formValue === undefined || formValue === null) {
      notify("", "Please enter your name to register or login", "warning")
      return
    }

    const response = await fetch(`/api/meeting/registerOrLogin/${meetingId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: formValue }),
    })

    if (!response.ok) {
      notify("", "Please enter your name to register or login", "warning")
      return
    }

    const data = await response.text()

    setName(data)
  }

  return (
    <div className="mb-3">
      {name == null && (
        <div className="flex flex-col items-start gap-3 mb-10">
          <form>
            <label
              className="form-label inline-block text-gray-700"
              htmlFor="title"
            >
              Enter your name to fill out your availability:
            </label>
            <input
              type="text"
              className="form-control
        block
        w-full
        p-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="title"
              onChange={(event) => {
                setFormValue(event.target.value)
              }}
              placeholder="Name"
            ></input>
          </form>

          <button
            className="ease-in-out border-4 border-gray-200 hover:border-sky-200 text-base font-medium rounded-lg p-3 bg-sky-600 text-white w-max"
            onClick={registerOrLogin}
          >
            Login / Register
          </button>
        </div>
      )}
    </div>
  )
}
