import React from 'react'
import { useState, useEffect } from 'react'

function Homepage() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])
  return (
    <>
      <h1>Homepage</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              <th key={el.id + 'Id'}>{el.id}</th>
              <th key={el.id + 'userId'}>{el.userId}</th>
              <th key={el.id + 'title'}>{el.title}</th>
              <th key={el.id + 'body'}>{el.body}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Homepage
