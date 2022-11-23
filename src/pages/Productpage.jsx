import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [id])
  console.log(data)
  return (
    <div>
      {data && (
        <>
          <h1>{data.id}</h1>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </>
      )}
    </div>
  )
}

export default Product
