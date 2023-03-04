import React from 'react'
import { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import TableData from '../components/TableData'

function Homepage() {
  const url = './mock/data.json'
  const itemsPerPage = 55
  const [clients, setClients] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const visitedPage = (currentPage - 1) * itemsPerPage

  const changeCurrentPage = page => {
    return setCurrentPage(page)
  }

  const sortTable = sortedData => {
    setClients(sortedData)
  }

  const formatObjToArr = obj => {
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
      .then(client => {
        setClients(client)
        setTotalPage(Math.ceil(client.length / itemsPerPage))
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Clients list</h1>
      {totalPage > 0 ? (
        <Pagination changeCurrentPage={changeCurrentPage} currentPage={currentPage} totalPage={totalPage} />
      ) : (
        'Loading'
      )}
      <TableData clients={clients} visitedPage={visitedPage} itemsPerPage={itemsPerPage} sortTable={sortTable} />
    </div>
  )
}
export default Homepage
