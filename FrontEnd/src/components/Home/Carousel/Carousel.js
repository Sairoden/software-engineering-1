import "./Carousel.css";

import { useState, useEffect } from "react";
import modelCard1 from "../../../assets/Carousel/model-card4.webp";
import modelCard2 from "../../../assets/Carousel/model-card3.webp";
import modelCard3 from "../../../assets/Carousel/model-card1.webp";
import modelCard4 from "../../../assets/Carousel/model-card5.webp";
import modelCard5 from "../../../assets/Carousel/model-card15.webp";
import modelCard6 from "../../../assets/Carousel/model-card6.webp";
import modelCard7 from "../../../assets/Carousel/model-card7.webp";
import modelCard8 from "../../../assets/Carousel/model-card8.webp";
import modelCard9 from "../../../assets/Carousel/model-card9.webp";
import modelCard10 from "../../../assets/Carousel/model-card10.webp";
import modelCard11 from "../../../assets/Carousel/model-card11.webp";
import modelCard12 from "../../../assets/Carousel/model-card12.webp";
import modelCard13 from "../../../assets/Carousel/model-card13.webp";
import modelCard14 from "../../../assets/Carousel/model-card14.webp";
import modelCard15 from "../../../assets/Carousel/model-card2.webp";

const slideWidth = 30;

const _items = [
  {
    player: {
      title: "kyaandere",
      desc: "🤍 whos your fave vtuber? I only really watch pekora she’s too funny",
      image: modelCard1,
      link: "https://www.instagram.com/kyaandere/",
    },
  },
  {
    player: {
      title: "kbho_odink",
      desc: "Baby's finally (almost) done ( ◜‿◝ )♡ Ff wat fotootjes voor dat hij weer eens ergens aan gemaakt moet worden weetje? En wederom weer wat van mijn favoriete merkjes aan...",
      image: modelCard8,
      link: "https://www.instagram.com/kbho_odink/",
    },
  },
  {
    player: {
      title: "maidmimi",
      desc: "Excuus the messy background 😳👉👈 one of my fav fits from not to long ago hehe 💓next colour way??",
      image: modelCard3,
      link: "https://www.instagram.com/maidmimi/",
    },
  },
  {
    player: {
      title: "dreedafuq",
      desc: "How is everyone doing today? I'm sitting sick at home 🤧",
      image: modelCard4,
      link: "https://www.instagram.com/dreedafuq/",
    },
  },
  {
    player: {
      title: "_orichado_",
      desc: "reflected",
      image: modelCard5,
      link: "https://www.instagram.com/_orichado_/",
    },
  },
  {
    player: {
      title: "maid.mikan",
      desc: "Finally got my first shirt 🥺💞",
      image: modelCard6,
      link: "https://www.instagram.com/maid.mikan/",
    },
  },
  {
    player: {
      title: "unknown._.711",
      desc: "The Restock T-Shit includes Most Of Their Designs In One Shirt.",
      image: modelCard7,
      link: "https://www.instagram.com/unknown._.711/",
    },
  },
  {
    player: {
      title: "milkgore",
      desc: "Lmao I was gonna take a break but then I remembered that I don’t have a life outside Instagram 🤡",
      image: modelCard2,
      link: "https://www.instagram.com/milkgore/",
    },
  },

  {
    player: {
      title: "xhiitayx",
      desc: "I’m Too Trippy baby… 👽🛸✌🏾🤘🏾",
      image: modelCard9,
      link: "https://www.instagram.com/xhiitayx/",
    },
  },
  {
    player: {
      title: "madame_enygma",
      desc: "TW // cuties with fake guns",
      image: modelCard10,
      link: "https://www.instagram.com/madame_enygma/",
    },
  },
  {
    player: {
      title: "tsukimicat",
      desc: "Foxgirl next door V2 ✨️ Heres a little casual KDA Ahri cosplay for you all~ Featuring my sweater!! Aaaaaa I felt so cute in this!!🥺 And I feel like this is definitely an outfit Ahri would wear on her day off hehe",
      image: modelCard11,
      link: "https://www.instagram.com/tsukimicat/",
    },
  },
  {
    player: {
      title: "stewe.m",
      desc: "peep the @a.i.channel_official",
      image: modelCard12,
      link: "https://www.instagram.com/p/COTfW8wljF6/",
    },
  },
  {
    player: {
      title: "linnichi",
      desc: "Midnight post why not 😴 Should I do more casual looks like this? Or stick to cosplay? Please let me know! Your Input will help me a lot!! 😊",
      image: modelCard13,
      link: "https://www.instagram.com/linnichi/",
    },
  },
  {
    player: {
      title: "sandy.len",
      desc: "Tried something new",
      image: modelCard14,
      link: "https://www.instagram.com/sandy.len/",
    },
  },
  {
    player: {
      title: "usagii.chi",
      desc: "☁️🌸 me wearing the kizuna AI shirt 🥺💕 it’s really cute!",
      image: modelCard15,
      link: "https://www.instagram.com/usagii.chi/",
    },
  },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <a href={item.player.link}>
          <img src={item.player.image} alt={item.player.title} />
        </a>
      </div>
      <div className="carousel-slide-item__body">
        <h4>
          <strong>{item.player.title}</strong>
        </h4>

        <p>{item.player.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className="carousel">
      <div className="carousel__wrap">
        <div className="carousel__inner">
          <button
            className="carousel__btn carousel__btn--prev"
            onClick={() => prevClick()}
          >
            <i className="carousel__btn-arrow carousel__btn-arrow--left" />
          </button>
          <div className="carousel__container">
            <ul className="carousel__slide-list">
              {items.map((pos, i) => (
                <CarouselSlideItem
                  key={i}
                  idx={i}
                  pos={pos}
                  activeIdx={activeIdx}
                />
              ))}
            </ul>
          </div>
          <button
            className="carousel__btn carousel__btn--next"
            onClick={() => nextClick()}
          >
            <i className="carousel__btn-arrow carousel__btn-arrow--right" />
          </button>
          <div className="carousel__dots">
            {items.slice(0, length).map((pos, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={i === activeIdx ? "dot active" : "dot"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
