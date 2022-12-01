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
      .then(arrOfObj => setData(arrOfObj))
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
                <Link key={element.id + element.id} to={`/products/${element.id}`} className={'table-link'}>
                  {element.Name}
                </Link>
              </td>
              <td key={element.Surname}>
                <Link key={'link' + element.Surname} to={`/products/${element.id}`} className={'table-link'}>
                  {element.Surname}
                </Link>
              </td>
              <td key={element.City}>
                <Link key={'link' + element.City} to={`/products/${element.id}`} className={'table-link'}>
                  {element.City}
                </Link>
              </td>
              <td key={element.salary}>
                <Link key={'link' + element.salary} to={`/products/${element.id}`} className={'table-link'}>
                  {element.salary}
                </Link>
              </td>
              <td key={element.Phone_no}>
                <Link key={'link' + element.Phone_no} to={`/products/${element.id}`} className={'table-link'}>
                  {element.Phone_no}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default Homepage
