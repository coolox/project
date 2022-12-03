import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Product() {
  const url = '../mock/data.json'
  const id = useParams()
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

  function searchArr(arr) {
    return arr.find(obj => obj.id === id.id)
  }

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(obj => formatObjToArr(obj))
      .then(arrOfObj => searchArr(arrOfObj))
      .then(searchResult => setData(searchResult))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container">
      <>
        <h1>
          {data.Name} {data.Surname}
        </h1>
        <h3>City: {data.City}</h3>
        <h3>Tel: {data.Phone_no}</h3>
        <h4>Salary: ${data.salary}</h4>
      </>

      <Link to="/" className="back-link">
        Back
      </Link>
    </div>
  )
}
export default Product
