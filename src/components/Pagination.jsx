import React from 'react'

// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, changeCurrentPage, totalPage }) => {
  const pageArray = []
  for (let i = 1; i <= totalPage; i++) {
    pageArray.push(i)
  }

  const paginationBtnsHandler = page => {
    changeCurrentPage(page)
  }

  const nextBtnHandler = () => {
    if (currentPage === totalPage) {
      return changeCurrentPage(currentPage)
    } else {
      return changeCurrentPage(currentPage + 1)
    }
  }

  const prevBtnHandler = () => {
    if (currentPage === 1) {
      return changeCurrentPage(1)
    } else {
      return changeCurrentPage(currentPage - 1)
    }
  }

  console.log('currentPage', currentPage)

  const pageList = pageArray.map(page => (
    <span onClick={() => paginationBtnsHandler(page)} className="paginationBtns" key={page}>
      {page}
    </span>
  ))

  return (
    <div className="pagination">
      <span onClick={prevBtnHandler} className="paginationBtns">
        Prev
      </span>
      {pageList}
      <span onClick={nextBtnHandler} className="paginationBtns">
        Next
      </span>
    </div>
  )
}

export default Pagination
