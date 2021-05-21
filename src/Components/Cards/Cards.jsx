import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({
  title,
  image,
  language,
  vote_count,
  vote_average,
  release_date,
  movieID,
}) => {
  return (
    <div className="card">
      <Link style={{ color: "white" }} to={`/movie/${movieID}`}>
        <div className="poster">
          <img src={image} className="card-img-top poster-img" alt="..."></img>
        </div>

        <div className="card-img-overlay contents">
          <h5 className="card-title">{title}</h5>
          <div>
            <p>Release Date: {release_date}</p>
            <p>
              Language: {language}
              <span className="vote">
                {vote_average}/10 {vote_count}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Cards;
