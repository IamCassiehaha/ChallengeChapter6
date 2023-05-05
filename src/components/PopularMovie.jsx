import React, { useEffect, useState } from "react";
import "./popularmovie.scss";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

const PopularMovie = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_LINK_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div className="popular">
      <div className="popular_container">
        <div className="popular_title">
          <h2>Popular Movies</h2>
          <div
            className="popular_info"
            onClick={() => navigate("/SeeAllMovie")}
          >
            <h4>See All Movie</h4>
            <ArrowForwardRounded id="arrow_icon"></ArrowForwardRounded>
          </div>
        </div>
        <div className="popular_wrapper">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {movies.map((result, index) => {
              return (
                <div className="popular_card" key={index}>
                  <SwiperSlide key={index}>
                    <a href={`/Details/${result.id}`} key={index}>
                      <img
                        src={`${process.env.REACT_APP_GAMBAR_LINK_URL}/${result.poster_path}`}
                        alt={`${result.original_title}`}
                      ></img>
                    </a>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularMovie;
