import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const navLinks = [
  { id: 1, name: "features", href: "/features" },
  { id: 2, name: "price", href: "/price" },
  { id: 3, name: "how to use", href: "/how-to-use" },
  { id: 4, name: "roadmap", href: "/roadmap" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);

  return (
    <header>
      <div className="container">
        <div className="header-item">

          <NavLink to="/" className="header-logo" onClick={closeMobileMenu}>
            <img src="/logo.svg" alt="Logo" />
          </NavLink>

          <div className="header-center">
            <img src="/circle.png" alt="Circle" className="circle-img" />
          </div>

          <div className="header-nav">
            {navLinks.map((el) => (
              <NavLink
                key={el.id}
                to={el.href}
                className="nav-link"
                onClick={closeMobileMenu}
              >
                {el.name}
              </NavLink>
            ))}
          </div>

          <div className="header-btn">
            <NavLink to="/register" className="nav-link" onClick={closeMobileMenu}>
              new account
            </NavLink>
            <NavLink to="/login" className="nav-link btn" onClick={closeMobileMenu}>
              sign in
            </NavLink>
          </div>

          <button className="burger" onClick={() => setOpen(!open)}>
            <img src={open ? "/header-close.png" : "/header.png"} alt="Menu" />
          </button>

          <div className={`mobile-menu ${open ? "active" : ""}`}>
            <div className="mobile-nav">
              {navLinks.map((el) => (
                <NavLink
                  key={el.id}
                  to={el.href}               
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  {el.name}
                </NavLink>
              ))}
            </div>

            <div className="mobile-buttons">
              <NavLink to="/register" className="nav-link" onClick={closeMobileMenu}>
                new account
              </NavLink>
              <NavLink to="/login" className="nav-link btn" onClick={closeMobileMenu}>
                sign in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}