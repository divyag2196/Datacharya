import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  return (
    <header className={`navbar ${scrollNav ? "sticky-nav" : ""}`}>
      
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Datacharya" />
          </Link>
        </div>

        {/* Menu */}
        {/* <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          

          <Link to="/approach" onClick={() => setMenuOpen(false)}>
            Our Approach
          </Link>

          <Link to="/platforms" onClick={() => setMenuOpen(false)}>
            Platforms
          </Link>

          <Link to="/advisory" onClick={() => setMenuOpen(false)}>
            CXO Advisory
          </Link>

          <Link to="/blogs" onClick={() => setMenuOpen(false)}>
            Blogs
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </nav> */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          
          <NavLink to="/about">About Us</NavLink>

          {/* <Link to="/approach" onClick={() => setMenuOpen(false)}>
            Our Approach
          </Link> */}

          <Link to="/platforms" onClick={() => setMenuOpen(false)}>
            Platforms
          </Link>

          <Link to="/advisory" onClick={() => setMenuOpen(false)}>
            CXO Advisory
          </Link>

          <Link to="/blogs" onClick={() => setMenuOpen(false)}>
            Blogs
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </nav>

        {/* Hamburger */}
        <div
          className={menuOpen ? "hamburger open" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
      <div className="header-border">

      </div>

    </header>

  );
}

export default Navbar;