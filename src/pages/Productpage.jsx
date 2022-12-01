import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Product() {
  const url = '../mock/data.json'
  const id = useParams()
  const [data, setData] = useState([])

  function formatObjToArr(obj) {
    return Object.entries(obj).reduce((accum, [key, value]) => {
      if (key === id.id) {
        const normalizedItem = {
          ...value,
          id: key
        }
        accum.push(normalizedItem)
      }
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
  return (
    <>
      {data.map(element => (
        <>
          <h1 key={element}>
            {element.Name} {element.Surname}
          </h1>
          <h3 key={element.City}>City: {element.City}</h3>
          <h3 key={element.Phone_no}>Tel: {element.Phone_no}</h3>
          <h4 key={element.salary}>Salary: ${element.salary}</h4>
        </>
      ))}
      <Link to="/" className="back-link">
        Back
      </Link>
    </>
  )
}
export default Product
