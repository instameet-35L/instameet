export default function TitleForm({ setTitle }) {
  return (
    <form className="mb-3 xl:w-96 self-center">
      <label
        className="form-label inline-block mb-2 text-gray-700"
        htmlFor="title"
      >
        Please enter your event name below:
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
          setTitle(event.target.value)
        }}
        placeholder="35L Project Meeting"
      ></input>
    </form>
  )
}
