import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { setProducts } from "../../State/actions/movieAction";
import axios from "axios";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState(null);
  const dispatch = useDispatch();

  const findMovie = async (e) => {
    e.preventDefault();
    const search = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=9a07a672bfd39241437ab59c2b1b47f7&query=${e.target.value}`
    );
    dispatch(setProducts({ searchMovie: search.data.results }));
  };

  return (
    <nav className="navbar navbar-dark bg-dark bg-theme-black">
      <Link className="navbar-brand" to="/">
        <img src={logo} className="logo" width="100" alt="Netflix" />
      </Link>
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link text-white">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/popular" className="nav-link text-white">
              New & Popular
            </Link>
          </li>
          {!toggle ? (
            <li className="nav-item">
              <Link
                to="/search"
                onClick={() => {
                  setToggle(true);
                }}
                className="nav-link text-white"
              >
                <i className="fas fa-search"></i>
              </Link>
            </li>
          ) : null}

          {toggle ? (
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                onChange={findMovie}
                placeholder="Search Movie"
                className="form-control"
              />
            </form>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
