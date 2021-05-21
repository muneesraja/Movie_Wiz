import React, { useEffect, useState } from "react";
import axios from "axios";
import CardsContainer from "../../Components/Cards-container/Cards-container";

const Home = () => {
  const popularURL =
    "https://api.themoviedb.org/3/movie/popular?api_key=9a07a672bfd39241437ab59c2b1b47f7";
  const topRatedURL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=9a07a672bfd39241437ab59c2b1b47f7";
  const upcomingURL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=9a07a672bfd39241437ab59c2b1b47f7";

  const [trendMovies, setTrendMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [upcomingMovies, setupComingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const movies = await axios.get(popularURL);
    const topRated = await axios.get(topRatedURL);
    const upcoming = await axios.get(upcomingURL);
    setTopMovies(topRated.data.results);
    setTrendMovies(movies.data.results);
    setupComingMovies(upcoming.data.results);
  };

  return (
    <div className="cards-collection">
      <CardsContainer cardTitle="Trending Now" trendMovies={trendMovies} />
      <CardsContainer cardTitle="Top Rated" trendMovies={topMovies} />
      <CardsContainer
        cardTitle="Upcoming Movies"
        trendMovies={upcomingMovies}
      />
    </div>
  );
};

export default Home;
