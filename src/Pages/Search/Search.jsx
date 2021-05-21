import React, { useEffect } from "react";
import Card from "../../Components/Cards/Cards";
import { useSelector } from "react-redux";

const Search = () => {
  const movieName = useSelector((state) => state.allMovies);
  const imageURL = "https://image.tmdb.org/t/p/w300";
  useEffect(() => {
    console.log(movieName);
  }, [movieName]);
  return (
    <div className="row">
      {movieName.searchMovie.map((data) => {
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

export default Search;
