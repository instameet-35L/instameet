export default function Input() {
  const handleKeyDown = (event) => {
    console.log(event.key)

    if (event.key === "Enter") {
      console.log("You Pressed Enter!")
      fetch("http://localhost:3001/api/test", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          username: event.target.value,
        }),
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => console.log(error))
      console.log(event.target.value)
      event.target.value = ""
    }
  }
  return <input type="text" onKeyDown={handleKeyDown} />
}
