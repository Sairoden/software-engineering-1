import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Favorite.css";

import Pokemon from "./../../assets/Extra/pokemon.png";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import Footer from "../Footer/Footer";

import { WishListContext } from "../Context/WishListContext";

const productUrl = item => {
  if (item.keywords.includes("Shi")) return "/collections/anime-tee-shirts";
  else if (item.keywords.includes("Hoo"))
    return "/collections/anime-hoodies-and-sweatshirts";
  else if (item.keywords.includes("Soc")) return "/collections/anime-socks";
  else if (item.keywords.includes("Cos"))
    return "/collections/anime-weeb-cosplay-accessories";
  else if (item.keywords.includes("Hom"))
    return "/collections/anime-weeb-cosplay-accessories";
  else if (item.keywords.includes("Lig"))
    return "/collections/3d-led-anime-bedroom-lights-lamps";
  else if (item.keywords.includes("Pil"))
    return "/collections/anime-kawaii-cartoon-bedroom-pillows";
  else if (item.keywords.includes("Nsf"))
    return "/collections/nsfw-anime-merch";
  else if (item.keywords.includes("Sad") || item.keywords.includes("Aes"))
    return "/collections/sad-aesthetic";
  else if (item.keywords.includes("Sen"))
    return "/collections/japanese-senpai-shirts-and-hoodies";
  else if (item.keywords.includes("Vap"))
    return "/collections/vaporwave-aesthetic-clothing-tees-hoodies-merch";
  else if (item.keywords.includes("Wai"))
    return "/collections/japanese-waifu-shirts-and-hoodies";
  else if (item.keywords.includes("Air"))
    return "/collections/anime-airpod-1-2-pro-cases";
  else if (item.keywords.includes("Pho"))
    return "/collections/anime-phone-cases";
  else if (item.keywords.includes("Tec"))
    return "/collections/anime-tech-accessories";
  else if (item.keywords.includes("Ani")) return "/collections/all-anime-merch";
  else if (item.keywords.includes("Att") || item.keywords.includes("Titan"))
    return "/collections/attack-on-titan-anime-merch";
  else if (item.keywords.includes("Dar"))
    return "/collections/darling-in-the-franxx-anime-weeb-merch";
  else if (item.keywords.includes("Dem") || item.keywords.includes("Sla"))
    return "/collections/demon-slayer-anime-merch";
  else if (item.keywords.includes("Drag") || item.keywords.includes("Ball"))
    return "/collections/dragon-ball-z-anime-merch";
  else if (item.keywords.includes("Hun"))
    return "/collections/hunter-x-hunter-anime-merch";
  else if (item.keywords.includes("Her") || item.keywords.includes("Acad"))
    return "/collections/my-hero-academia-anime-merch";
  else if (item.keywords.includes("Tot") || item.keywords.includes("Neigh"))
    return "/collections/my-neighbor-totoro-anime-merch";
  else if (item.keywords.includes("Nar"))
    return "/collections/naruto-anime-merch";
  else if (item.keywords.includes("One") || item.keywords.includes("Pie"))
    return "/collections/one-piece-anime-merch";
  else if (item.keywords.includes("Sail") || item.keywords.includes("Moo"))
    return "/collections/sailor-moon-anime-merch";
};

const Favorite = () => {
  const { wishListItems } = useContext(WishListContext);
  console.log(wishListItems);

  return (
    <>
      {wishListItems.length ? (
        <>
          <div className="title">Wish List</div>
          <div className="container">
            {wishListItems.map(item => (
              <Link
                to={`${productUrl(item)}/products/${item.id}`}
                key={item.id}
              >
                <FavoriteItem
                  className="product_card"
                  mini={"miniTop"}
                  key={item.id}
                  wishListItem={item}
                />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="empty-favorite">
          <img src={Pokemon} alt="Pokemon Trainer" className="pokemon" />
          <div className="empty-text">
            <div className="empty-title">Empty Wish List</div>
            <Link to="/collections/anime-clothing-apparel">
              <h1 className="explore">Catch some pokemons!</h1>
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Favorite;
