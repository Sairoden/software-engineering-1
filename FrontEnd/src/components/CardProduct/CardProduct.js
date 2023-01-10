import "./CardProduct.css";

const Card = ({ miniTop, mini, item }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={`card ${miniTop}`} id={mini}>
      <img src={item.photo} alt={item.name} />
      <p className="title">{item.name}</p>
      <p className="price">₱{numberWithCommas(item.price)}</p>
    </div>
  );
};
export default Card;
