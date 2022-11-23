import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])
  return (
    <>
      <h1>Products Table</h1>
      <table className="cell">
        <thead>
          <tr>
            <th className="cell">Id</th>
            <th className="cell">User Id</th>
            <th className="cell">Title</th>
            <th className="cell">Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              <th key={el.id + 'Id'} className="cell">
                {el.id}
              </th>
              <th key={el.id + 'userId'} className="cell">
                {el.userId}
              </th>
              <Link key={el.id + 'link'} to={`/${el.id}`} className="cell">
                <p key={el.id + 'title'} className="cell">
                  {el.title}
                </p>
              </Link>
              <th key={el.id + 'body'} className="cell">
                {el.body}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Homepage
