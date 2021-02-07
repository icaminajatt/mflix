import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination'
import axios from 'axios'
import MovieItem from './BrowseCards';
import Loading from '../Loading/loading';
import HomeHeader from '../HomePage/HomeHeader/HomeHeader'
import './BrowseMovies.css';
import SearchBtn from '../SearchBtn/SearchBtn'
import Filter from '../BrowseFilter/BrowseFilter'

const BrowseMovies: React.FC = () => {

  const [movies, setMovies] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(false) ;
  const [totalPages, setTotalPages] = useState<number>(1);
  const [activeButton, setButton] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1)

  const [minRating, setMinRating] = useState<number>(1);
  const [maxRating, setMaxRating] = useState<number>(9);
  const [genre, setGenre] = useState<string>('Action');  
  const [year, setYear] = useState<string>('2015');
  const [language, setLanguage] = useState<string>('English');
  const [languageList, setLanguageList] = useState<Array<string>>([]);
  const [yearList, setYearList] = useState<Array<string>>([]);
  const [genreList, setGenreList] = useState<Array<string>>([]);

  var pageDots = '...'
  var pageLeftDots = '... '
  var pageRightDots = ' ...'

    const getMovies = async () => {
      setLoading(true)
      await axios
      .get(`http://178.128.218.253:8000${window.location.pathname}`)
      .then(result => {
        const results = result.data.movies;
        console.log(results);
        setMovies(results)
        setLoading(false);
        setTotalPages(result.data.pageCount);
        const curNum = `${window.location.pathname}`;
        setButton(parseInt(curNum.slice(13)));
      })
      .catch(err => console.log(err));
    }
  
    useEffect(() => {
      getMovies();
      getLanguages();
      getGenres();
      getYears();
    }, []);
  
    useEffect(() => {
      movePage();
    }, [totalPages])
  
  
  const pageCount: Array<number>  = []
  for (var i = 1; i <= totalPages; i++) {
    pageCount.push(i)
  }

  const [listButtons, setlistButtons] = useState<Array<number>>([])

  const movePage = () => {
    
    var initialPageCount: Array<any> = [...listButtons]
    if (pageCount.length < 20) {
      initialPageCount = [1, 2, 3, 4, pageDots, 1000]
    } else if (activeButton >= 1 && activeButton <= 3) {
      initialPageCount = [1, 2, 3, 4, pageDots, pageCount.length]
    } else if (activeButton === 4) {
      const prev = pageCount.slice(0, 5)
      initialPageCount = [...prev, pageDots, pageCount.length]
    } else if (activeButton > 4 && activeButton < (pageCount.length - 2)) {      
      const prevLess2 = pageCount.slice(activeButton - 2, activeButton)               
      const prevAdd1 = pageCount.slice(activeButton, activeButton + 1)        
      initialPageCount = ([1, pageLeftDots, ...prevLess2, ...prevAdd1, pageRightDots, pageCount.length]) 
    } else if (activeButton > pageCount.length - 3) {              
      const prev = pageCount.slice(pageCount.length - 4)      
      initialPageCount = ([1, pageLeftDots, ...prev])                        
    } else if (!activeButton === !pageDots) {
      setButton(listButtons[listButtons.length-3] + 1) 
    } else if (!activeButton === !pageRightDots) {
      setButton(listButtons[3] + 2)
    } else if (!activeButton === !pageLeftDots) {
      setButton(listButtons[3] - 2)
    }

    setlistButtons(initialPageCount)
    setButton(activeButton)
    setCurrentPage(activeButton)
  }

  const getActiveMovies = async (activeButton : any) => {
    await axios
    .get(`http://178.128.218.253:8000/movies?page=${activeButton}`)
    .then(result => {
      const results = result.data.movies;
      setMovies(results)
      setLoading(false);
    })
    .catch(err => console.log(err));
  }
    
  useEffect(() => {
    getActiveMovies(activeButton);
  }, [activeButton])

  const getYears = async () => {
    await axios
    .get(`http://178.128.218.253:8000/years`)
    .then(result => {
      const results = result.data.years
      console.log(results)
      setYearList(results);
    })
    .catch(err => console.log(err));
  }

  const getLanguages = async () => {
    await axios
    .get(`http://178.128.218.253:8000/languages`)
    .then(result => {
      const results = result.data.languages
      console.log(results)
      setLanguageList(results);
    })
    .catch(err => console.log(err));
  }

  const getGenres = async () => {
    await axios
    .get(`http://178.128.218.253:8000/genres`)
    .then(result => {
      const results = result.data.genres
      console.log(results)
      setGenreList(results);
    })
    .catch(err => console.log(err));
  }

   const filterSearches = async (year : string, genre : string, language : string) => {
    setLoading(true)
    await axios
    .get(`http://178.128.218.253:8000/movies/filtered?year=${year}&&genres=${genre}&&languages=${language}&&minRating=${minRating}&&maxRating=${maxRating}&&page=${activeButton}`)
    .then(result => {
      const results = result.data.movies;
      console.log(results);
      if (results === undefined) {
        console.log("no matches found")
      }
      setMovies(results)
      if (result.data.pageCount> 1000) {
        setTotalPages(1000)
      } else {
        setTotalPages(result.data.pageCount);
      }
      setLoading(false);
    })
    .catch(err => console.log(err));
  }

  useEffect(()=> {
    filterSearches(year,genre,language)
  }, [year, genre, language])

  const defaultValues = () => {
    setYear('2015');
    setLanguage('English')
    setGenre('Action')
    setButton(1);

  }

  const movieResults = () => {
    if (movies === undefined) {
      return (
        <>
          <div className='no-result'>
            <h1>No Match Found</h1>
          </div>
        </>
      )
    } else {
      return (
        <>
        <HomeHeader />
        <div className="search-button-browse">
        <SearchBtn />
        </div>
        <div className='poster-container'>
          <MovieItem movies={movies} /> 
        </div>
        <div className='pagination-container'>
        <Pagination 
            activeButton={activeButton} 
            setButton={setButton} 
            pageCount={pageCount}
            listButtons={listButtons}
          />
        </div>
        </>
      )
      
    }
  }
  
  return (
    <>
    <div className="movie-container">
      <Filter 
        setYear={setYear}
        yearList={yearList}
        setLanguage={setLanguage}
        languageList={languageList}
        genreList={genreList}
        setGenre={setGenre}
        defaultValues={defaultValues}
      />
      { loading ? <Loading /> : <div className='movie-result'>{movieResults()}</div>}
      </div>
    </>
  );
}

export default BrowseMovies;