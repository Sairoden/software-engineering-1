import React, { useRef, useContext, useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import OnClickOutside from "./hook/OnClickOutside";
import "./../css/CartStyle.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

import CartItem from "./CartItem/CartItem";

import { CartContext } from "../Context/CartContext";
import { UserContext } from "../Context/UserContext";

const Cart = ({ isCartToggle, setCartToggle }) => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const { user } = useContext(UserContext);

  // control for clicking outside the layer
  const $sideBarRef = useRef();
  OnClickOutside($sideBarRef, () => setCartToggle(false));

  return (
    <>
      <div className="cart-icon" onClick={() => setCartToggle(true)}>
        <div className="wrapper">
          <ShoppingCartOutlined />
          {/* {cartItems.length > 0 && (
      <div className="counter">{cartItems.length}</div>
    )} */}
        </div>
      </div>
      <div className="cart">
        {isCartToggle && <div className="overlay"></div>}
        <div
          ref={$sideBarRef}
          className={isCartToggle ? "cart-bar expand" : "cart-bar shrink"}
        >
          <div className="heading">
            Cart
            <CloseCircleOutlined onClick={() => setCartToggle(false)} />
          </div>
          <div className="cart-items">
            {cartItems.length ? (
              <div className="item-wrapper">
                {cartItems.map(item => (
                  <CartItem key={item.id} cartItem={item} />
                ))}
                <div className="total-price">Total: ₱ {cartTotal}</div>
                <div>
                  <Link
                    to={user ? "../Checkout" : "/login"}
                    className="cart-btn"
                  >
                    CHECK OUT
                  </Link>
                </div>
              </div>
            ) : (
              <div className="empty">Empty cart</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
