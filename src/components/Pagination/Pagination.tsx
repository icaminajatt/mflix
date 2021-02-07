import React, { useState, useEffect } from 'react';
import './Pagination.css'
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'

const previous : string  = '<';
const next : string = '>';

type Pagination = {
  pageCount: number[],
  listButtons: Array<number>
  setButton: (value: number | any) => void,
  activeButton: number
}

const Pagination: React.FC<Pagination> = ({
  pageCount,
  listButtons, 
  setButton, 
  activeButton }) => {

  const nextPage = () => {
    setButton(activeButton + 1)
  }
  
  const prevPage = () => {
    setButton(activeButton -1)
  }

  

  return (
    <div className="page">
      <ScrollToTop />
      <Link to={`/movies/page/${activeButton - 1}`} className={`${activeButton === 1 ? 'disabled' : ''}`} onClick={prevPage}>{previous}</Link>
      {listButtons.map(((item, index) => {
        const midClicked = () => {
          setButton(item)
        }
        return (
          <Link to={`/movies/page/${item}`} key={index} className={`${activeButton === item ? 'active' : ''}`} onClick={midClicked}>{item}</Link>
        )
      }))}
      <Link to={`/movies/page/${activeButton + 1}`} className={`${activeButton === pageCount.length ? 'disabled' : ''}`} onClick={nextPage}>{next}</Link>
    </div>
  );
}


export default Pagination;