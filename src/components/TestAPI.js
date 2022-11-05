import { useState, useEffect } from "react"

export default function TestAPI() {
  const [data, setData] = useState("loading")

  useEffect(() => {
    fetch("http://localhost:3001/api/test")
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setData(result)
      })
      .catch(console.error)
  }, [])

  return (
    <div>
      <div>Under here is data from API</div>
      <div>{data}</div>
    </div>
  )
}
