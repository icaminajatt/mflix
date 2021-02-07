import React from 'react'
import './HomeContent.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBtn from '../../SearchBtn/SearchBtn'

const HomeContent: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const getMovieRequest = async (searchValue : any, page : any) => {
    await axios
    .get(`http://178.128.218.253/movies/search?searchString=${searchValue}`)
    .then(response => {
        const { data: results } = response.data;
        setMovies(results);
        console.log(results);
    })
    .catch((err) => console.log(err));
}
  return (
    <>
        <div className="homeContent">
            <h1 className="homeh1">Unlimited Movie Selection</h1>
            <p className="homep">Discover your next favorite movie.</p>
            {/* <div className="search-box">
                <input className="search-txt" type="text" name=""></input>
                <label className="search-btn"><i className="fas fa-search"/></label>  
            </div> */}
            <div className="searchAll"><SearchBtn /></div>
            <p className="homep1">Search for any movie, actor, director or plot or <Link to={`/movies/page/${page}`} className='graph-link'>Browse All Movies</Link></p>
            <p className="homep2">Or wanna know how many movies were created in the year you were born? <Link to='/graph' className='graph-link'>Click here!</Link></p>
        </div>  
    </>
  )
}

export default HomeContent;