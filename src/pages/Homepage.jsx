import React from 'react'
import { useEffect, useState } from 'react'

function Homepage() {
  const url = './mock/data.json'
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const accum = []
        for (let [key, value] of Object.entries(data)) {
          value.id = key
          accum.push(value)
        }
        return accum
      })
      .then(res => setData(res))
      .catch(e => console.error(e))
  }, [])

  console.log(data)
  return (
    <>
      <h1>Home Page</h1>
    </>
  )
}
export default Homepage
