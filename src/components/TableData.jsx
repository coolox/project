import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import imgUp from '../img/up.png'
import imgDown from '../img/down.png'

// eslint-disable-next-line react/prop-types
const TableData = ({ clients, visitedPage, itemsPerPage, sortTable }) => {
  const [sortDirection, setSortDirection] = useState('asc')
  const [sortField, setSortField] = useState('id')
  const clientList = clients

  function sortTableByField(id) {
    const sortDir = sortDirection === 'asc' ? 1 : -1
    const clonedData = clientList.concat()
    clonedData.sort((a, b) => (a[id] > b[id] ? 1 * sortDir : -1 * sortDir))

    sortTable(clonedData)
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
  return (
    <div>
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
          {clientList.slice(visitedPage, visitedPage + itemsPerPage).map(element => {
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
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableData
