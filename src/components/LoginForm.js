import { useState } from "react"

export default function LoginForm({ setName, meetingId }) {
  const [isValid, setIsValid] = useState(true)
  const [formValue, setFormValue] = useState(null)

  async function registerOrLogin() {
    if (formValue === undefined || formValue === null) {
      setIsValid(false)
      return
    }

    const response = await fetch(`/api/meeting/update/${meetingId}`, {
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
      <form class="mb-3 xl:w-96">
        <label class="form-label inline-block mb-2 text-gray-700" for="title">
          Enter your name:
        </label>
        <input
          type="text"
          class="form-control
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

      <div class="flex flex-col items-center space-y-5">
        <button
          class="text-base font-medium rounded-lg p-3 bg-cyan-600 text-white w-max"
          onClick={registerOrLogin}
        >
          Login / Register
        </button>
        {!isValid && (
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <p class="font-bold">Invalid input</p>
          </div>
        )}
      </div>
    </>
  )
}
