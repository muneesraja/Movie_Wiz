import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Popular from "./Pages/Popular/Popular";
import MovieDetails from "./Pages/Movie-detail/MovieDetails";
import Search from "./Pages/Search/Search";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/popular" component={Popular} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:movieID" component={MovieDetails} />
      </Switch>
    </Router>
  );
};

export default App;
