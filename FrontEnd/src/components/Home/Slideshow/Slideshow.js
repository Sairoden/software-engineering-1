import React from "react";
// photos
import onePiece from "../../../assets/Home/one-piece.jpg";
import model1 from "../../../assets/Home/model1.jpg";
import model2 from "../../../assets/Home/model2.jpg";
import cartoon from "../../../assets/Home/cartoon.jpg";
import clothes from "../../../assets/Home/clothes.jpg";

export const Slideshow = () => {
  return (
    <div id="slide-show" className="slide-show">
      <div className="box">
        <img src={model1} alt="Model" />
        <img src={onePiece} alt="One Piece" />
        <img src={model2} alt="Model" />
        <img src={clothes} alt="Clothes" />
        <img src={cartoon} alt="cartoon" />
      </div>
    </div>
  );
};
