import React, { useState, useRef, useEffect } from "react";
import logo from "./google.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { links, socials } from "./data";
function Navbar() {
  const [showLink, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    /* console.log(linkHeight) */
    if (showLink) {
      linksContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLink]);

  return (
    <nav>
      <div className="container">
        <div className="nav-logo">
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLink)}
          >
            {showLink ? <FaTimes /> : <FaBars />}
          </button>
          <img src={logo} alt="" />
        </div>
        {/*         <div className={`${showLink ? "nav-links active" : "nav-links"}`}>
          <ul className="list">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div> */}
        <div className="nav-links" ref={linksContainerRef}>
          <ul className="list" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="nav-social">
          {socials.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
