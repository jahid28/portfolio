import React, { useEffect, useState, useRef, Suspense } from "react";
import "../css/Opening.css";

export default function Opening() {
  useEffect(() => {
    const handleScroll = () => {
      let yaxis = window.scrollY;
      document.getElementById("openingBody").style.top = `${-yaxis * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="openingBody" className="body">
      <a
        id="upArrow"
        onClick={() => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;
        }}
      >
        <i className="fa-solid fa-circle-chevron-up"></i>
      </a>

      <div className="heading">
        <p className="hi">Hi, I'm</p>
        <h1 id="myname">Jahid Khan</h1>
      </div>

    
      <p className="welcome">Scroll Down</p>
      <i className="fa-solid fa-arrow-down-long arrow"></i>
    </div>
  );
}
