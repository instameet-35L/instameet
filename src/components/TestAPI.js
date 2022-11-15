import { useState, useEffect } from "react"

export default function TestAPI() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3001/api/meeting/all")
      .then((response) => response.json())
      .then((res) => {
        setData(res)
        setLoading(false)
      })
      .catch(console.error)
  }, [])

  if (loading) return <div>Data Loading...</div>

  return (
    <>
      <ul>
        {data.map((el) => {
          if (el.username) {
            return <li>{el.username}</li>
          }
        })}
      </ul>
    </>
  )
}
