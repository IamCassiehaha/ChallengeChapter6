import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
// }, []);

  return (
    <main>
      <div className="movie-details-cover">
        <img
          className="movie-backdrop"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="movie-details-body">
        <div className="movie-details-header">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
          />
          <h1>{movie?.title || "Movie Title"}</h1>
        </div>
        <div className="movie-data">
          <div className="movie-synopsis">
            <h1>Synopsis</h1>
            <p>{movie?.overview}</p>
          </div>
          <div className="movie-rating">
            <h1>Rating</h1>
            <p>
              <span>{movie?.vote_average + " "}</span>({movie.vote_count} votes)
            </p>
          </div>
          <div className="movie-genres">
            <h1>Genres</h1>
            <p>{movie?.genres?.map((genre) => {
              return genre.name + ", ";
            })}</p>
          </div>
          <div className="movie-status">
            <h1>Status</h1>
            <p>This movie is {movie?.status?.toLowerCase()}</p>
          </div>
          <div className="movie-producers">
            <h1>Producers</h1>
            <div className="producers">
              {movie?.production_companies?.map((company) => {
                return <img title={company.name} alt={company.name} className="producer-logo" src={`https://image.tmdb.org/t/p/original/${company.logo_path}`} />
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
