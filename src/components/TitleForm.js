export default function TitleForm({ setTitle }) {
  return (
    <form>
      <label for="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={(event) => {
          setTitle(event.target.value)
        }}
        placeholder="35L Project Meeting"
      ></input>
    </form>
  )
}
