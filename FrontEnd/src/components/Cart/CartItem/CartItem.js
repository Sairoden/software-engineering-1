const CartItem = ({ cartItem, setTotalPrice }) => {
  const { name, quantity, photo, price } = cartItem;

  return (
    <div className="items">
      <img src={photo} alt={name} className="img" />
      <div className="info">
        <div>{name}</div>
        <div>X{quantity}</div>
        <div>₱{price}</div>
      </div>
    </div>
  );
};

export default CartItem;
