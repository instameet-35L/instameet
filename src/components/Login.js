import { useState } from "react"

export default function Login({ name, setName, meetingId }) {
  const [isValid, setIsValid] = useState(true)
  const [formValue, setFormValue] = useState(null)

  async function registerOrLogin() {
    if (formValue === undefined || formValue === null) {
      setIsValid(false)
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
      setIsValid(false)
      return
    }

    const data = await response.text()

    setName(data)
  }

  return (
    <>
      {name == null && (
        <>
          <form className="mb-3 xl:w-96">
            <label
              className="form-label inline-block mb-2 text-gray-700"
              htmlFor="title"
            >
              Enter your name:
            </label>
            <input
              type="text"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="title"
              onChange={(event) => {
                setFormValue(event.target.value)
              }}
              placeholder="Name"
            ></input>
          </form>

          <div className="flex flex-col items-center space-y-5">
            <button
              className="text-base font-medium rounded-lg p-3 bg-[#1087ff] text-white w-max"
              onClick={registerOrLogin}
            >
              Login / Register
            </button>
            {!isValid && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <p className="font-bold">Invalid input</p>
              </div>
            )}
          </div>
        </>
      )}
      {name != null && <div>You're logged in as {`${name}`}</div>}
    </>
  )
}
