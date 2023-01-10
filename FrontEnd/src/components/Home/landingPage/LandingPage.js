import React from "react";
import { Link } from "react-router-dom";

import mainCover from "../../../assets/Home/main-cover.webp";

export const LandingPage = () => {
  return (
    <div className="hero_container home">
      <div className="hero_container_title">
        <p>Stay Sugoi ツ</p>
        <p>Only the best anime merch and inspiration</p>
        <Link to="/collections/anime-clothing-apparel" className="btn">
          Treat Yourself{" "}
        </Link>
      </div>
      <img
        src={mainCover}
        style={{ backgroundPosition: "center", backgroundSize: "center" }}
        alt="hero_img_girl"
      />
    </div>
  );
};
