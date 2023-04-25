import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import MoviesPages from "../../Pages/Movies/MoviesPages";

import "./Footer.css"



const Footer = () => {
  return (
    <Router>
      <footer className="container">
      <ul className="footer">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </footer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPages />} />
      </Routes>
    </Router>
  );
};

export default Footer;
