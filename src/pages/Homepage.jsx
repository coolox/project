import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
      .then(products => setData(products))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>Data list</h1>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>City</th>
            <th>Salary</th>
            <th>Phone no</th>
          </tr>
        </thead>
        <tbody>
          {data.map(element => (
            <tr key={element.id}>
              <td key={element.id + 'id'}> {element.id} </td>
              <td key={element.Name}>
                <Link key={element.id + element.id} to={`/${element.id}`} className={'table-link'}>
                  {element.Name}
                </Link>
              </td>
              <td key={element.Surname}>{element.Surname}</td>
              <td key={element.City}>{element.City}</td>
              <td key={element.salary}>{element.salary}</td>
              <td key={element.Phone_no}>{element.Phone_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default Homepage
