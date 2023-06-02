import React, { useEffect, useState } from 'react';
import './SeeAllMovie.scss';
// import { getMovieList, searchMovie } from './api';
import { useNavigate } from "react-router-dom"; // berguna untuk routing
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from 'react-redux';
import { getMovieList} from '../feature/movie/movieSlice';

const SeeAllMovie = () => {

  // berguna untuk routing
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  const movies = useSelector(state=> state.movies.movies)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMovieList());
  }, [dispatch])


  const PopularMovieList = () => {
    return movies.map((movie, i) => {
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

  const submit = () => {
    navigate(`/SearchResult/${search}`)
  }

  return (
    <div>
      {/* kalau di klik dia bakalan kembali ke Home */}
      <button onClick={() => navigate ('/')}>Back</button>
      <div className='all-movie'>
        <h1 id='AllMovie'>All Movie</h1>
        <form className='form-search'>
          <input 
            placeholder='What do you want to watch?' 
            className='movie-searchbar' 
            onChange={(e) => setSearch(e.target.value)}
          />
          <button id='search_icon' onClick={submit}><SearchIcon /></button>
        </form>
        <div className='movie-container'>
          <PopularMovieList />
        </div>
      </div>
    </div>
  )
}

export default SeeAllMovie
