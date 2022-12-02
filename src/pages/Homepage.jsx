import React from 'react'
import { useEffect, useState } from 'react'

function Homepage() {
  const url = './mock/data.json'
  const [data, setData] = useState([])
  function formatObjToArr(obj) {
    return Object.entries(obj).reduce((accum, [key, value]) => {
      const normalizedItem = {
        ...value,
        id: key
      }
      accum.push(normalizedItem)
      return accum
    }, [])
  }

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(obj => formatObjToArr(obj))
      .then(arrOfObj => setData(arrOfObj))
      .catch(err => console.error(err))
  }, [])

  console.log(data)
  return (
    <>
      <h1>Home Page</h1>
    </>
  )
}
export default Homepage
