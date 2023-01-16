import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import imgUp from '../img/up.png'
import imgDown from '../img/down.png'

function Homepage() {
  const url = './mock/data.json'
  const itemsPerPage = 100
  const [data, setData] = useState([])
  const [sortDirection, setSortDirection] = useState('asc')
  const [sortField, setSortField] = useState('id')
  const [pageNumber, setPagesNumber] = useState(0)

  const visitedPage = pageNumber * itemsPerPage
  const pageCount = Math.ceil(data.length / itemsPerPage)

  const displayData = data.slice(visitedPage, visitedPage + itemsPerPage).map(element => {
    return (
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
    )
  })

  function nextBtnHandler() {
    if (pageNumber == pageCount - 1) {
      return setPagesNumber(pageCount - 1)
    } else {
      return setPagesNumber(pageNumber + 1)
    }
  }

  function prevBtnHandler() {
    if (pageNumber == 0) {
      return setPagesNumber(0)
    } else {
      return setPagesNumber(pageNumber - 1)
    }
  }

  function paginationBtnsHandler(page) {
    setPagesNumber(page - 1)
  }

  function Pagination() {
    const pages = []

    for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }

    const listItems = pages.map(page => (
      <span onClick={() => paginationBtnsHandler(page)} className="paginationBtns" key={page}>
        {page}
      </span>
    ))

    return (
      <div className="pagination">
        <span onClick={prevBtnHandler} className="paginationBtns">
          Prev
        </span>
        {listItems}
        <span onClick={nextBtnHandler} className="paginationBtns">
          Next
        </span>
      </div>
    )
  }

  function sortTableByField(id) {
    const sortDir = sortDirection === 'asc' ? 1 : -1
    const clonedData = data.concat()
    clonedData.sort((a, b) => (a[id] > b[id] ? 1 * sortDir : -1 * sortDir))

    setData(clonedData)
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    setSortField(id)
  }

  function showSortDirection(row) {
    return sortField === row && sortDirection === 'asc' ? (
      <img src={imgUp} style={{ width: '15px' }} />
    ) : sortField === row && sortDirection === 'desc' ? (
      <img src={imgDown} style={{ width: '15px' }} />
    ) : null
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
      <Pagination />
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
        <tbody>{displayData}</tbody>
      </table>
    </>
  )
}
export default Homepage
