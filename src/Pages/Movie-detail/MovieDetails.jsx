import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  useEffect(() => {
    getMovie();
  }, []);
  const { movieID } = useParams();
  const imageURL = "https://image.tmdb.org/t/p/w300";
  const getMovie = async () => {
    const movieURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=9a07a672bfd39241437ab59c2b1b47f7`;
    const movieDetails = await axios.get(movieURL);
    console.log(movieDetails.data);

    setMovieDetail(movieDetails.data);
  };
  return (
    <div className="container">
      <div className="row mt-4 bg-black">
        <div className="col-md-6 text-center">
          <img src={imageURL + movieDetail.poster_path} alt="" />
          <p>{movieDetail.tagline}</p>
        </div>
        <div className="col-md-6 text-center mt-4">
          <h3>{movieDetail.title}</h3>
          <br />
          <br />

          <p>{movieDetail.overview}</p>
          <br />
          <br />
          <div className="row">
            <div className="col-6">
              <li>Status: {movieDetail.status}</li>
              <li>Release Date: {movieDetail.release_date}</li>
              <li>Language: {movieDetail.original_language}</li>
            </div>
            <div className="col-6">
              <li>Vote: {movieDetail.vote_average}/10</li>
              <li>Total Vote: {movieDetail.vote_count}</li>
              <li>Revenue: {movieDetail.revenue}</li>
            </div>
          </div>
          <br />
          <br />
          <div>
            Genres:
            {movieDetail.genres?.map((data) => {
              return (
                <span className="badge badge-pill badge-primary">
                  {data.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
