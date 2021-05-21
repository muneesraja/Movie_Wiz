import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./Container.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Cardscontainer = ({ cardTitle, trendMovies }) => {
  const [windowWidth, setWindowWidth] = useState(6);

  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth < 768) {
      setWindowWidth(3);
    } else {
      setWindowWidth(6);
    }
  });

  const imageURL = "https://image.tmdb.org/t/p/w300";
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: windowWidth,
    slidesToScroll: 1,
  };

  return (
    <div className="cards-container container-fluid">
      <h6>{cardTitle}</h6>
      <div className="cards">
        <Slider {...settings}>
          {trendMovies.map((data) => {
            return (
              <Cards
                key={data.id}
                movieID={data.id}
                title={data.title}
                image={imageURL + data.backdrop_path}
                language={data.original_language}
                release_date={data.release_date}
                vote_average={data.vote_average}
                vote_count={data.vote_count}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Cardscontainer;
