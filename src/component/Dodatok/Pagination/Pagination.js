import React, {useState} from "react";
import {connect} from "react-redux";
import './Pagination.css'


const Pagination = (props) => {

  let pages = [];
  let portionSize = 10;
  for (let i = 1; i <= props.totalResults; i++){
    pages.push(i)
  }

  let portionCount = Math.ceil(props.totalResults / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className='padding'>
      {portionNumber > 1 &&
      <button className='back page' onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}>Prev</button>}

      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
            return <span
              className={props.currentPage === p ? "current-number page" : "page"}
              key={p}
              onClick={(e) => {
                props.onPageChange(p)
              }}> {p}
            </span>
          }
        )}
      {portionCount > portionNumber &&
      <button className='next page' onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}> NEXT</button>}
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    totalResults: state.popularMovies.totalResults,

  }
}
export default connect(mapStateToProps, null) (Pagination);
