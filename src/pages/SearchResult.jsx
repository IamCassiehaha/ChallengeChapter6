import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "./api";
import "./SearchResult.scss";
import { useNavigate } from "react-router-dom";

export default function SearchResult() {
  const [search] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

//   function cutOverview(overview) {
//     if (overview.length > 200) {
//       return overview.slice(0, 200) + "...";
//     } else {
//       return overview;
//     }
//   }

  useEffect(() => {
    searchMovie(search.get("search")).then((result) => {
      console.log(result.results);
      setSearchResult(result.results);
    });
  });
// }, []);

  return (
    <main>
      <h1>Search Result</h1>
      <div
        className="back-button"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </div>
      <div className="search-result-grid">
        {searchResult.map((movie) => {
          return (
            <a href={`/Details/${movie.id}`}>
              <div className="movie-card" key={movie.id}>
                <img
                  src={`${process.env.REACT_APP_GAMBAR_LINK_URL}/${movie.poster_path}`}
                  alt=""
                />
                <div className="movie-body">
                  <h3>{movie.title}</h3>
                  {/* <h4>{movie.vote_average}</h4>
                  <p>{cutOverview(movie.overview)}</p> */}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}
