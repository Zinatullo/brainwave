import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const navLinks = [
  { id: 1, name: "features", href: "/features" },
  { id: 2, name: "pricing", href: "/pricing" },
  { id: 3, name: "how to use", href: "/how-to-use" },
  { id: 4, name: "roadmap", href: "/roadmap" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="header-item">
          <div className="header-logo">
            <img src="/logo.svg" alt="Logo" />
          </div>

          <div className="header-center">
            <img src="/circle.png" alt="Circle" className="circle-img" />
          </div>

          <div className="header-nav">
            {navLinks.map((el) => (
              <NavLink key={el.id} to={el.href} className="nav-link">
                {el.name}
              </NavLink>
            ))}
          </div>

          <div className="header-btn">
            <NavLink to="/register" className="nav-link">
              new account
            </NavLink>
            <NavLink to="/login" className="nav-link btn">
              sign in
            </NavLink>
          </div>

          <div className="burger" onClick={() => setOpen(!open)}>
            {open ? (
              <img src="/header-close.png" alt="Close menu" />
            ) : (
              <img src="/header.png" alt="Open menu" />
            )}
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <div className="mobile-nav">
          {navLinks.map((el) => (
            <NavLink 
              key={el.id} 
              to={el.href} 
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {el.name}
            </NavLink>
          ))}
        </div>
        
        <div className="mobile-buttons">
          <NavLink 
            to="/register" 
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            new account
          </NavLink>
          <NavLink 
            to="/login" 
            className="nav-link btn"
            onClick={() => setOpen(false)}
          >
            sign in
          </NavLink>
        </div>
      </div>
    </header>
  );
}