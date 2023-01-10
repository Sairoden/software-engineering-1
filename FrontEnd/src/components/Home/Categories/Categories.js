import React from "react";
import { Link } from "react-router-dom";
// photos
import tShirt from "../../../assets/Home/ghost-fighter.webp";
import accessories from "../../../assets/Home/accessories.webp";
import hoodie from "../../../assets/Home/hoodie.jpg";
import ledlight from "../../../assets/Home/led-light.jpg";
import pillow from "../../../assets/Home/pillow.jpg";
export const Categories = () => {
  return (
    <div className="categories">
      <div className="heading">Isekai Merchandise</div>
      <div className="body">
        <div className="box">
          <div className="row row1">
            <div className="col">
              <div className="box">
                <Link to="/collections/anime-tee-shirts">
                  <div
                    className="img"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${tShirt})`,
                    }}
                  >
                    <div className="label">
                      <h1>T-shirt</h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <Link to="/collections/anime-tech-accessories">
                  <div
                    className="img"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${accessories})`,
                    }}
                  >
                    <div className="label">
                      <h1>Accessories</h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row row2">
            <div className="col">
              <div className="box">
                <Link to="/collections/anime-hoodies-and-sweatshirts">
                  <div
                    className="img"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${hoodie})`,
                    }}
                  >
                    <div className="label">
                      <h1>Hoodies</h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <Link to="/collections/3d-led-anime-bedroom-lights-lamps">
                  <div
                    className="img"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${ledlight})`,
                    }}
                  >
                    <div className="label">
                      <h1>LED Light</h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <Link to="/collections/anime-kawaii-cartoon-bedroom-pillows">
                  <div
                    className="img"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${pillow})`,
                    }}
                  >
                    <div className="label">
                      <h1>Pillow</h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
