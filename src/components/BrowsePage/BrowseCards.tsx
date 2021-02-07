import React from 'react'
import { Link } from 'react-router-dom';
import './BrowseCards.css'
import logo from '../../media/mflix.png'
import logoM from '../../media/mflixLogo.png'

const MovieItem = ({ movies } : {movies : any}) => {
  return ( 
    <ul className="cards">
      {movies.map((movie : any, index : any) => {
        return (
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <div>
                {movie.poster !== undefined  ? 
                <img  className="locandina" src={movie.poster}/> :
                <img  className="locandinaLogo" src={logoM}/> }
              </div> 
              <h1>{movie.title}</h1>
              <h4>{movie.year}</h4>
              <p className="minutes">{movie.directors}</p>
              <p className="type">{movie.genres}</p>
            </div>
            <div className="movie_desc">
              <p className="text">
                {movie.plot}
              </p>
            </div>      
          </div>
            <div>
              {movie.poster !== undefined  ? <img  className="blur_back bright_back" src={movie.poster}  alt="poster"/> : <img  className="blur_backLogo bright_back" src={logo}/> }
              </div> 
        </div>
        )
      })}
    </ul>
  )
}

export default MovieItem;