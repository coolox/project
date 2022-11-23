import React from 'react'
import { useState, useEffect } from 'react'

function Homepage() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])
  console.log(data)
  return <h1>Home</h1>
}
export default Homepage
