import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import imgUp from '../img/up.png'
import imgDown from '../img/down.png'

function Homepage() {
  const url = './mock/data.json'
  const itemsPerPage = 10
  const [data, setData] = useState([])
  const [pageData, setPageData] = useState([])
  const [sortDirection, setSortDirection] = useState('asc')
  const [sortField, setSortField] = useState('id')
  const [pagesQty, setPagesQty] = useState()

  function displayPageData(page = 0) {
    let pageData = []
    const firstElementOfPage = page * itemsPerPage
    pageData = data.slice(firstElementOfPage, firstElementOfPage + itemsPerPage)
    setPageData(pageData)
  }

  function Pagination() {
    console.log('pageQty:', pagesQty)
    const pages = []
    for (let i = 1; i <= pagesQty; i++) {
      pages.push(i)
    }
    const listItems = pages.map(page => (
      <span onClick={() => displayPageData(page - 1)} key={page}>
        {page}
      </span>
    ))
    return <div>{listItems}</div>
  }

  function sortTableByField(id) {
    const sortDir = sortDirection === 'asc' ? 1 : -1
    const clonedData = data.concat()
    clonedData.sort((a, b) => (a[id] > b[id] ? 1 * sortDir : -1 * sortDir))

    setData(clonedData)
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    setSortField(id)
    displayPageData()
  }

  function showSortDirection(row) {
    return sortField === row && sortDirection === 'asc' ? (
      <img src={imgUp} style={{ width: '15px' }} />
    ) : sortField === row && sortDirection === 'desc' ? (
      <img src={imgDown} style={{ width: '15px' }} />
    ) : null
  }

  function formatObjToArr(obj) {
    console.log('formatObjToArr')
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
      .then(products => {
        setData(products.slice(0, 50))
        console.log('data', data)
        setPagesQty(Math.ceil(data.length / itemsPerPage))
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>Data list</h1>
      <div className="pagination-row">{<Pagination />}</div>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => sortTableByField('id')}>
              id
              {showSortDirection('id')}
            </th>
            <th onClick={() => sortTableByField('Name')}>
              Name
              {showSortDirection('Name')}
            </th>
            <th onClick={() => sortTableByField('Surname')}>
              Surname
              {showSortDirection('Surname')}
            </th>
            <th onClick={() => sortTableByField('City')}>
              City
              {showSortDirection('City')}
            </th>
            <th onClick={() => sortTableByField('salary')}>
              Salary
              {showSortDirection('salary')}
            </th>
            <th onClick={() => sortTableByField('Phone_no')}>
              Phone no
              {showSortDirection('Phone_no')}
            </th>
          </tr>
        </thead>
        <tbody>
          {pageData.map(element => (
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
