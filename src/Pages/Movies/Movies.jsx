import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Components/Cards/Cards";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const movieURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=9a07a672bfd39241437ab59c2b1b47f7";
  const imageURL = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const movie = await axios.get(movieURL);
    setMovies(movie.data.results);
  };

  return (
    <div className="row text-center">
      {movies.map((data) => {
        return (
          <Card
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
    </div>
  );
};

export default Movies;
