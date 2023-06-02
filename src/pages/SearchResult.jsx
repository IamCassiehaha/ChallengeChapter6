import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { searchMovie } from "./api";
import {useDispatch, useSelector} from 'react-redux';
import { searchMovie } from '../feature/movie/movieSlice';
import "./SearchResult.scss";
import './SeeAllMovie.scss';
import { useNavigate } from "react-router-dom";

export default function SearchResult() {
  const {param} = useParams();
  const navigate = useNavigate();

  const searchResult = useSelector(state=> state.movies.search)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(searchMovie(param));
  }, [param, dispatch])

  const SearchList = () => {
    return searchResult.map((movie, i) => {
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

  return (
    <div>
      {/* kalau di klik dia bakalan kembali ke SeeAllMovie */}
      <button onClick={() => navigate ('/SeeAllMovie')}>Back</button>
      <div className='all-movie'>
        <h1 id='AllMovie'>Search Result Movie</h1>
        <div className='movie-container'>
          <SearchList />
        </div>
      </div>
    </div>
  );
}
