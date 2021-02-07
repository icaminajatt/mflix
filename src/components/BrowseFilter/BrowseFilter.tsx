import React, {useState} from 'react'
import {YearFilter, GenreFilter, LanguageFilter} from './Filtering'
import './BrowseFilter.css'

const Filter = ({setYear, yearList, setLanguage, languageList, setGenre, genreList, defaultValues} : {yearList: any, setYear : any, setLanguage : any,languageList : any, setGenre : any, genreList : any, defaultValues : any}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div>
        <div className='menu-filter' onClick={handleClick}>
          <p>Filter Searches</p>
        </div>
        <ul className={click ? 'filter-menu active' : 'filter-menu'}>
          <p>Any year, language or genre in your mind? Filter it!</p>
          <li className='filter-item filter-links'><YearFilter setYear={setYear} yearList={yearList} /></li>
          <li className='filter-item filter-links'><LanguageFilter setLanguage={setLanguage} languageList={languageList} /></li>
          <li className='filter-item filter-links'><GenreFilter setGenre={setGenre} genreList={genreList} /></li>
          <li className='filter-item filter-links'><button className='filter-btn' type='submit' onClick={defaultValues}>Clear Choices</button></li>
        </ul>
      </div>
    </>
  )
}

export default Filter
