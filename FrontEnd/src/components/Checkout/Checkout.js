import React, { useRef, useContext, useState } from "react";
import Footer from "../Footer/Footer";
import CartItem from "../Cart/CartItem/CartItem";
import { CartContext } from "../Context/CartContext";
import "./../css/CartStyle.css";
import "../css/style.css";
import { Link } from "react-router-dom";

const Checkout = item => {
  const { cartItems, cartTotal, removeItemFromCart } = useContext(CartContext);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <div className="checkout flex-c justify-content-center">
        {cartItems.length ? (
          <>
            <div className="row">
              <div className="title col">Checkout</div>
              <div className="row">
                <div className="col-75">
                  <div className="left col">Shopping Cart</div>

                  <div className="col">
                    <div className="row">
                      <div className="col-95">
                        <div className="row">
                          <div className="col-25 right">
                            <b>Product</b>
                          </div>
                          <div className="col-25">
                            <b>Name</b>
                          </div>
                          <div className="col-25">
                            <b>Quantity</b>
                          </div>
                          <div className="col-25 right">
                            <b>Total Price</b>
                          </div>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="row">
                          <div className="col"></div>
                        </div>
                      </div>
                    </div>
                    {cartItems.map(item => (
                      <div className="row">
                        <div className="col-95">
                          <div className="row">
                            <div className="col-25 right">
                              <img src={item.photo} alt={item.name} />
                            </div>
                            <div className="col-25">{item.name}</div>
                            <div className="col-25">{item.quantity}</div>
                            <div className="col-25 right">₱{item.price}</div>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="row">
                            <div className="col right">
                              <button
                                type="submit"
                                className="checkout-rmv-btn"
                                onClick={() => removeItemFromCart(item)}
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row">
                    <div className="col right">
                      <div>SubTotal: ₱ {numberWithCommas(cartTotal)}</div>
                      <div>Shipping fee: ₱ 49</div>
                    </div>
                    <div className="col-75 bold">
                      <b>
                        <Link to="/">« Continue Shopping</Link>
                      </b>
                    </div>
                    <div className="col-25 right bold">
                      <b>Total: ₱ {numberWithCommas(cartTotal + 49)}</b>
                    </div>
                  </div>
                </div>
                <div className="col-25">
                  <div className="billing">
                    <div className="heading col">Payment Info.</div>
                    {cartItems.length ? (
                      <div>
                        <div className="col">
                          <form className=" form ">
                            <div className="col">
                              <label>
                                {" "}
                                <h3>
                                  <b>Payment Method:</b>
                                </h3>{" "}
                              </label>
                              <table>
                                <tbody>
                                  <tr>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        value="CreditCard"
                                        name="payment"
                                        className="radio-btn"
                                        required
                                      />{" "}
                                    </td>
                                    <td className="label"> Credit Card </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        value="PayPal"
                                        name="payment"
                                        className="radio-btn"
                                        required
                                      />{" "}
                                    </td>
                                    <td className="label"> PayPal </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="col">
                              <label>
                                {" "}
                                <h3>
                                  <b>Account Name:</b>
                                </h3>{" "}
                              </label>
                              <input
                                type="text"
                                id="accountName"
                                className="input"
                                placeholder="Juan Dela Cruz"
                                required
                              />
                            </div>
                            <div className="col">
                              <label>
                                {" "}
                                <h3>
                                  <b>Card Number:</b>
                                </h3>{" "}
                              </label>
                              <input
                                type="tel"
                                id="cardNumber"
                                className="input"
                                placeholder="**** **** **** 6754"
                                pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                                required
                              />
                            </div>
                            <div className="row">
                              <div className="col-60">
                                <label>
                                  {" "}
                                  <small>
                                    <b>Expiration Date:</b>
                                  </small>{" "}
                                </label>
                                <input type="month" className="input" />
                              </div>
                              <div className="col-40">
                                <label>
                                  {" "}
                                  <b>CVV:</b>{" "}
                                </label>
                                <input
                                  type="tel"
                                  className="input"
                                  placeholder="403"
                                  pattern="[0-9]{3}"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col">
                              {" "}
                              <button type="submit" className="checkout-btn">
                                CHECKOUT
                              </button>{" "}
                            </div>
                          </form>
                        </div>
                      </div>
                    ) : (
                      <div className="empty">Empty cart</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="checkout flex-c justify-content-center">
            <div className="heading">YOUR SHOPPING CART IS EMPTY!</div>
            <div className="sub-heading text-center">
              <Link to="/">Continue Shopping</Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
