import React, { useEffect, useState } from "react";
import "./Header.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";

const Header = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_LINK_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
        },
      })
      .then((response) => {
        const newMovies = [];
        for (let i = 0; i < 5; i++) {
          newMovies.push(response.data.results[i]);
        }
        setMovies(newMovies);
      });
  }, []);
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_wrapper">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              dynamicBullets: "swiper-pagination-bullet-active",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
          >
            {movies.map((result, index) => {
              return (
                <div className="header_container" key={index}>
                  <SwiperSlide key={index}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
                      alt={`${result.original_title}`}
                    />
                    <div className="detail">
                      <h2 className="title">{result.original_title}</h2>
                      <p className="desc">{result.overview}</p>
                      <div className="button_watch_trailer">
                        <button className="play_watch_trailer">
                          <PlayArrowIcon />
                          Watch Trailer
                        </button>
                      </div>
                    </div>
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

export default Header;
