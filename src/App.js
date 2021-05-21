import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Pages/Movie-detail/MovieDetails";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/movies" component={Movies} />
        <Route path="/movie/:movieID" component={MovieDetails} />
      </Switch>
    </Router>
  );
};

export default App;
