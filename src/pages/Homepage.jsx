import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  const url = './mock/data.json'
  const [data, setData] = useState([])
  const [sortDirection, setSortDirection] = useState('asc')
  const [sortField, setSortField] = useState('')

  function sortTable(sortField) {
    const sortDir = sortDirection === 'asc' ? 1 : -1
    const clonedData = data.concat()
    clonedData.sort((a, b) => (a[sortField] > b[sortField] ? 1 * sortDir : -1 * sortDir))

    setData(clonedData)
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    setSortField(sortField)
  }

  function showSortDirection(row) {
    return sortField === row && sortDirection === 'asc'
      ? ' ' + String.fromCharCode(9662)
      : sortField === row && sortDirection === 'desc'
      ? ' ' + String.fromCharCode(9652)
      : null
  }

  function formatObjToArr(obj) {
    return Object.entries(obj).reduce((accum, [key, value]) => {
      const normalizedItem = {
        ...value,
        id: +key
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
            <th onClick={sortTable.bind(null, 'id')}>
              id
              {showSortDirection('id')}
            </th>
            <th onClick={sortTable.bind(null, 'Name')}>
              Name
              {showSortDirection('Name')}
            </th>
            <th onClick={sortTable.bind(null, 'Surname')}>
              Surname
              {showSortDirection('Surname')}
            </th>
            <th onClick={sortTable.bind(null, 'City')}>
              City
              {showSortDirection('City')}
            </th>
            <th onClick={sortTable.bind(null, 'salary')}>
              Salary
              {showSortDirection('salary')}
            </th>
            <th onClick={sortTable.bind(null, 'Phone_no')}>
              Phone no
              {showSortDirection('Phone_no')}
            </th>
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
