import React, { useEffect, useState } from 'react';
import './SeeAllMovie.scss';
import { getMovieList, searchMovie } from './api';
import { useNavigate } from "react-router-dom"; // berguna untuk routing
import SearchIcon from '@mui/icons-material/Search';

const SeeAllMovie = () => {

  // berguna untuk routing
  const navigate = useNavigate()

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className='movie-wrapper' key={i}>
          <div className='movie-title'>{movie.title}</div>
          <img className='movie-image' alt='' src={`${process.env.REACT_APP_GAMBAR_LINK_URL}/${movie.poster_path}`} />
          {/* <div className='movie-desc'>{movie.overview}</div> */}
          <div className='movie-date'>Release Date: {movie.release_date}</div>
          <div className='movie-rate'>Rate: {movie.vote_average}</div> 
        </div>
      )
    })
  } 

  const search = async(q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }

  return (
    <div>
      {/* kalau di klik dia bakalan kembali ke Home */}
      <button onClick={() => navigate ('/')}>Back</button>
      <div className='all-movie'>
        <h1 id='AllMovie'>All Movie</h1>
        <form>
          <input 
            placeholder='What do you want to watch?' 
            className='movie-searchbar' 
            onChange={({ target }) => search(target.value)}
          />
           <SearchIcon id='search_icon'></SearchIcon>
        </form>
        <div className='movie-container'>
          <PopularMovieList />
        </div>
      </div>
    </div>
  )
}

export default SeeAllMovie
