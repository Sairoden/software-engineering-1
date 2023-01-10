/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { apparel, homegoods, techAccessories } from "../../data";
import Footer from "../Footer/Footer";
import Card from "./Card/Card";

import { Modal, Radio, Table } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import {
  columns,
  tShirtData,
  longTShirtData,
  sweatshirtData,
} from "./ModalData";

import "./ProductPage.css";
import "../Nav/Nav.css";
import "../Shop/Shop.css";

import { CartContext } from "../Context/CartContext";
import { WishListContext } from "../Context/WishListContext";

import Accordion from "./Accordion/Accordion";

const initialState = apparel;
const KawaiiProductPage = () => {
  const { id } = useParams();
  const [data] = useState(initialState);
  const [size, setSize] = useState(null);
  const [visible, setVisible] = useState(false);
  const [randomProduct, setRandomProduct] = useState([]);
  const [randomApparel, setRandomApparel] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const combineProduct = data.concat(homegoods).concat(techAccessories);

  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(filteredProduct);

  const { addItemToWishList } = useContext(WishListContext);
  const addProductToWishList = () => addItemToWishList(filteredProduct);

  useEffect(() => {
    setFilteredProduct(
      data.find(item => {
        return item.id == id;
      })
    );
  }, [id]);

  const handleChange = e => {
    setSize(e.target.value);
  };

  useEffect(() => {
    setRandomProduct(
      combineProduct.sort(() => 0.5 - Math.random()).slice(0, 6)
    );
    const dataCopy = [...data];
    setRandomApparel(dataCopy.sort(() => 0.5 - Math.random()).slice(0, 4));
  }, [filteredProduct]);

  return (
    <>
      <div className="product_container">
        <img
          src={filteredProduct.photo}
          className="product_image"
          alt={filteredProduct.name}
        />
        <div className="right">
          <div className="top_right">
            <p>{filteredProduct.name}</p>
            <p>₱{filteredProduct.price}</p>
            <p className="fourPayments">
              <quadpay-widget className="quadpay" logoColor="#1d75ec" />
            </p>
            <div className="size_container">
              <p className="size">Size: {size} </p>
              <div className="size_container_right">
                📐
                <button onClick={() => setVisible(true)}>Size Chart</button>
                <Modal
                  className="modal"
                  footer={null}
                  centered
                  visible={visible}
                  onCancel={() => setVisible(false)}
                  width={1000}
                >
                  <div className="modal_tables" style={{ height: "500" }}>
                    <div className="modal_table">
                      <h2 className="modal_header"> Adult Tee Size Chart </h2>
                      <Table
                        columns={columns}
                        dataSource={tShirtData}
                        bordered
                        pagination={false}
                      />
                    </div>
                    <div className="modal_table">
                      <h2 className="modal_header">
                        {" "}
                        Adult Long-Sleeve Tee Size Chart{" "}
                      </h2>
                      <Table
                        columns={columns}
                        dataSource={longTShirtData}
                        bordered
                        pagination={false}
                      />
                    </div>
                    <div className="modal_table">
                      <h2 className="modal_header">
                        {" "}
                        Adult Hooded Sweatshirt Size Chart{" "}
                      </h2>
                      <Table
                        columns={columns}
                        dataSource={sweatshirtData}
                        bordered
                        pagination={false}
                      />
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
            <Radio.Group
              className="radio_button"
              buttonStyle="solid"
              checked={false}
              onChange={handleChange}
            >
              <Radio.Button value="XS">XS</Radio.Button>
              <Radio.Button value="S">S</Radio.Button>
              <Radio.Button value="M">M</Radio.Button>
              <Radio.Button value="L">L</Radio.Button>
              <Radio.Button value="XL">XL</Radio.Button>
              <Radio.Button value="1X">1X</Radio.Button>
              <Radio.Button value="2X">2X</Radio.Button>
              <Radio.Button value="3X">3X</Radio.Button>
            </Radio.Group>
          </div>
          <div className="cart_container">
            <button onClick={addProductToCart} className="cart_button">
              ADD TO CART
            </button>
            <button onClick={addProductToWishList} className="heart_button">
              <HeartOutlined className="heart" />
            </button>
          </div>
          <Accordion />
        </div>
      </div>

      <div className="random_product">
        <div className="title"> You may also like</div>
        <p>Customers who brought this item also brought</p>

        <div className="container">
          {randomProduct.map(item => {
            const productUrl = item => {
              if (item.category === "apparel") {
                if (item.keywords.includes("Vaporwave")) {
                  return "vaporwave-aesthetic-clothing-tees-hoodies-merch";
                } else if (item.keywords.includes("Sad Aesthetic")) {
                  return "sad-aesthetic";
                } else if (item.keywords.includes("NSFW")) {
                  return "nsfw-anime-merch";
                } else if (item.keywords.includes("Kawaii")) {
                  return "kawaii-livestyle-accessories";
                } else if (item.keywords.includes("Senpai")) {
                  return "japanese-senpai-shirts-and-hoodies";
                } else if (item.keywords.includes("Waifu")) {
                  return "japanese-waifu-shirts-and-hoodies";
                } else if (item.keywords.includes("Cosplay")) {
                  return "anime-weeb-cosplay-accessories";
                } else if (item.keywords.includes("Shirt")) {
                  return "anime-tee-shirts";
                } else if (item.keywords.includes("Hoodie")) {
                  return "anime-hoodies-and-sweatshirts";
                } else if (item.keywords.includes("Socks")) {
                  return "anime-socks";
                }
              } else if (item.category === "homegoods") {
                if (item.keywords.includes("Lights")) {
                  return "3d-led-anime-bedroom-lights-lamps";
                } else if (item.keywords.includes("Pillow")) {
                  return "anime-kawaii-cartoon-bedroom-pillows";
                }
              } else if (item.category === "techAccessories") {
                if (item.keywords.includes("Airpod")) {
                  return "anime-airpod-1-2-pro-cases";
                } else if (item.keywords.includes("Phone")) {
                  return "anime-phone-cases";
                }
              }
            };
            return (
              <Link
                to={`/collections/${productUrl(item)}/products/${item.id}`}
                className="link overlay"
                key={item.id}
              >
                <Card
                  className="product_card"
                  mini={"miniTop"}
                  item={item}
                  key={item.id}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="similar_products">
        <div className="title"> Similar Products</div>
        <p>Customers who viewed this item also viewed</p>

        <div className="container">
          {randomApparel.map(item => {
            const productUrl = item => {
              if (item.category === "apparel") {
                if (item.keywords.includes("Vaporwave")) {
                  return "vaporwave-aesthetic-clothing-tees-hoodies-merch";
                } else if (item.keywords.includes("Sad Aesthetic")) {
                  return "sad-aesthetic";
                } else if (item.keywords.includes("NSFW")) {
                  return "nsfw-anime-merch";
                } else if (item.keywords.includes("Kawaii")) {
                  return "kawaii-livestyle-accessories";
                } else if (item.keywords.includes("Senpai")) {
                  return "japanese-senpai-shirts-and-hoodies";
                } else if (item.keywords.includes("Waifu")) {
                  return "japanese-waifu-shirts-and-hoodies";
                } else if (item.keywords.includes("Cosplay")) {
                  return "anime-weeb-cosplay-accessories";
                } else if (item.keywords.includes("Shirt")) {
                  return "anime-tee-shirts";
                } else if (item.keywords.includes("Hoodie")) {
                  return "anime-hoodies-and-sweatshirts";
                } else if (item.keywords.includes("Socks")) {
                  return "anime-socks";
                }
              } else if (item.category === "homegoods") {
                if (item.keywords.includes("Lights")) {
                  return "3d-led-anime-bedroom-lights-lamps";
                } else if (item.keywords.includes("Pillow")) {
                  return "anime-kawaii-cartoon-bedroom-pillows";
                }
              } else if (item.category === "techAccessories") {
                if (item.keywords.includes("Airpod")) {
                  return "anime-airpod-1-2-pro-cases";
                } else if (item.keywords.includes("Phone")) {
                  return "anime-phone-cases";
                }
              }
            };
            return (
              <Link
                to={`/collections/${productUrl(item)}/products/${item.id}`}
                className="link overlay"
                key={item.id}
              >
                <Card
                  className="product_card"
                  mini={"mini"}
                  item={item}
                  key={item.id}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KawaiiProductPage;
