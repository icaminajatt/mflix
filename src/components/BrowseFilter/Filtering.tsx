import React from 'react'
import './BrowseFilter.css'

const YearFilter = ({ setYear, yearList } : { setYear : any, yearList : any}) => {
  return (
    <>
      <div className="filter">
        <label className='filterLabel' >
          <select name="year" id="year" onChange={(e) => setYear(e.target.value)}>
            <option value='' disabled selected className='option-ph'>year</option>
            {yearList.map((year : any) => {
              return(
                <option value={year}>{year}</option>
              )
            })}
          </select>
        </label>
      </div>
    </>
  )
};

const LanguageFilter = ({ setLanguage, languageList } : {setLanguage : any, languageList : any}) => {
    return (
      <>
        <div className="filter">
          <label className='filterLabel' ><span className="sr-only">Select a word:</span>
            <select name="language" id="language" onChange={(e) => setLanguage(e.target.value)}>
              <option value='' className='option-ph'>language</option>
              {languageList.map((language : any) => {
                return(
                  <option value={language}>{language}</option>
                )
              })}
            </select>
          </label>
        </div>
      </>
    )
  };
  
const GenreFilter = ({ setGenre, genreList } : {setGenre : any, genreList : any}) => {
  return (
    <>
      <div className="filter">
        <label className='filterLabel' >
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option value='' className='option-ph'>genre</option>
            {genreList.map((genre : any) => {
              return(
                <option value={genre}>{genre}</option>
              )
            })}
          </select>
        </label>
      </div>
    </>
  )
};

export {YearFilter, GenreFilter, LanguageFilter};
