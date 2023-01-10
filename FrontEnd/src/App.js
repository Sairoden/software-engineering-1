import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

// User
import Register from "./components/User/Registration/Register";
import Login from "./components/User/Login/Login";
import Profile from "./components/User/Profile/Profile";

// Apparel
import Apparel from "./components/Shop/Apparel/Apparel";
import TeeShirts from "./components/Shop/Apparel/TeeShirts";
import Hoodies from "./components/Shop/Apparel/Hoodies";
import Socks from "./components/Shop/Apparel/Socks";
import Cosplay from "./components/Shop/Apparel/Cosplay";

// Homegoods
import Homegoods from "./components/Shop/Homegoods/Homegoods";
import Lights from "./components/Shop/Homegoods/Lights";
import Pillows from "./components/Shop/Homegoods/Pillows";

// Brands
import Brands from "./components/Shop/Brands/Brands";
import AttackOnTitan from "./components/Shop/Brands/AttackOnTitan";
import DarlingInTheFranxx from "./components/Shop/Brands/DarlingInTheFranxx";
import DemonSlayer from "./components/Shop/Brands/DemonSlayer";
import DragonBallZ from "./components/Shop/Brands/DragonBallZ";
import HunterXHunter from "./components/Shop/Brands/HunterXHunter";
import MyHeroAcademia from "./components/Shop/Brands/MyHeroAcademia";
import MyNeighborTotoro from "./components/Shop/Brands/MyNeighborTotoro";
import Naruto from "./components/Shop/Brands/Naruto";
import OnePiece from "./components/Shop/Brands/OnePiece";
import SailorMoon from "./components/Shop/Brands/SailorMoon";

// Collections
import Kawaii from "./components/Shop/Collections/Kawaii";
import NSFW from "./components/Shop/Collections/NSFW";
import SadAesthetic from "./components/Shop/Collections/SadAesthetic";
import Senpai from "./components/Shop/Collections/Senpai";
import Vaporwave from "./components/Shop/Collections/Vaporwave";
import Waifu from "./components/Shop/Collections/Waifu";

// Tech Accessories
import AirpodCase from "./components/Shop/TechAccessories/AirpodCase";
import PhoneCase from "./components/Shop/TechAccessories/PhoneCase";
import TechAccessories from "./components/Shop/TechAccessories/TechAccessories";

// Contact Us
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/AboutUs/ContactUs";
import React from "react";

// Favorite Page
import Favorite from "./components/Favorite/Favorite";
import Checkout from "./components/Checkout/Checkout";

// Products
import AirpodCaseProductPage from "./components/Products/AirpodCaseProductPage";
import PhoneCaseProductPage from "./components/Products/PhoneCaseProductPage";
import CosplayProductPage from "./components/Products/CosplayProductPage";
import HoodieProductPage from "./components/Products/HoodieProductPage";
import KawaiiProductPage from "./components/Products/KawaiiProductPage";
import LightProductPage from "./components/Products/LightProductPage";
import NSFWProductPage from "./components/Products/NSFWProductPage";
import PillowProductPage from "./components/Products/PillowProductPage";
import SadAestheticProductPage from "./components/Products/SadAestheticProductPage";
import SenpaiProductPage from "./components/Products/SenpaiProductPage";
import ShirtProductPage from "./components/Products/ShirtProductPage";
import SockProductPage from "./components/Products/SockProductPage";
import VaporwaveProductPage from "./components/Products/VaporwaveProductPage";
import WaifuProductPage from "./components/Products/WaifuProductPage";

// Extra
import Instruction from "./components/Products/Instruction/Instruction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />

        {/* USER */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        {/* APPAREL */}
        <Route
          path="/collections/anime-clothing-apparel"
          element={<Apparel />}
        />
        <Route path="/collections/anime-tee-shirts" element={<TeeShirts />} />
        <Route
          path="/collections/anime-hoodies-and-sweatshirts"
          element={<Hoodies />}
        />
        <Route path="/collections/anime-socks" element={<Socks />} />
        <Route
          path="/collections/anime-weeb-cosplay-accessories"
          element={<Cosplay />}
        />

        {/* HOMEGOODS */}
        <Route path="/collections/anime-homegoods" element={<Homegoods />} />
        <Route
          path="/collections/3d-led-anime-bedroom-lights-lamps"
          element={<Lights />}
        />
        <Route
          path="/collections/anime-kawaii-cartoon-bedroom-pillows"
          element={<Pillows />}
        />

        {/* COLLECTIONS */}
        <Route
          path="/collections/kawaii-livestyle-accessories"
          element={<Kawaii />}
        />
        <Route path="/collections/nsfw-anime-merch" element={<NSFW />} />
        <Route path="/collections/sad-aesthetic" element={<SadAesthetic />} />
        <Route
          path="/collections/japanese-senpai-shirts-and-hoodies"
          element={<Senpai />}
        />
        <Route
          path="/collections/vaporwave-aesthetic-clothing-tees-hoodies-merch"
          element={<Vaporwave />}
        />
        <Route
          path="/collections/japanese-waifu-shirts-and-hoodies"
          element={<Waifu />}
        />

        {/* TECH ACCESSORIES */}
        <Route
          path="/collections/anime-airpod-1-2-pro-cases"
          element={<AirpodCase />}
        />
        <Route path="/collections/anime-phone-cases" element={<PhoneCase />} />
        <Route
          path="/collections/anime-tech-accessories"
          element={<TechAccessories />}
        />

        {/* BRANDS */}
        <Route path="/collections/all-anime-merch" element={<Brands />} />
        <Route
          path="/collections/attack-on-titan-anime-merch"
          element={<AttackOnTitan />}
        />
        <Route
          path="/collections/darling-in-the-franxx-anime-weeb-merch"
          element={<DarlingInTheFranxx />}
        />
        <Route
          path="/collections/demon-slayer-anime-merch"
          element={<DemonSlayer />}
        />
        <Route
          path="/collections/dragon-ball-z-anime-merch"
          element={<DragonBallZ />}
        />
        <Route
          path="/collections/hunter-x-hunter-anime-merch"
          element={<HunterXHunter />}
        />
        <Route
          path="/collections/my-hero-academia-anime-merch"
          element={<MyHeroAcademia />}
        />
        <Route
          path="/collections/my-neighbor-totoro-anime-merch"
          element={<MyNeighborTotoro />}
        />
        <Route path="/collections/naruto-anime-merch" element={<Naruto />} />
        <Route
          path="/collections/one-piece-anime-merch"
          element={<OnePiece />}
        />
        <Route
          path="/collections/sailor-moon-anime-merch"
          element={<SailorMoon />}
        />

        {/* ABOUT US */}
        <Route path="/help/about-us" element={<AboutUs />} />
        <Route path="/help/contact-us" element={<ContactUs />} />

        {/* FAVORITE */}
        <Route path="/favorite" element={<Favorite />} />

        {/* CHECKOUT */}
        <Route path="/checkout" element={<Checkout />} />

        {/* PRODUCTS */}
        <Route
          path="/collections/anime-airpod-1-2-pro-cases/products/:id"
          element={<AirpodCaseProductPage />}
        />
        <Route
          path="/collections/anime-phone-cases/products/:id"
          element={<PhoneCaseProductPage />}
        />
        <Route
          path="/collections/anime-weeb-cosplay-accessories/products/:id"
          element={<CosplayProductPage />}
        />
        <Route
          path="/collections/anime-hoodies-and-sweatshirts/products/:id"
          element={<HoodieProductPage />}
        />
        <Route
          path="/collections/kawaii-livestyle-accessories/products/:id"
          element={<KawaiiProductPage />}
        />
        <Route
          path="/collections/3d-led-anime-bedroom-lights-lamps/products/:id"
          element={<LightProductPage />}
        />
        <Route
          path="/collections/nsfw-anime-merch/products/:id"
          element={<NSFWProductPage />}
        />
        <Route
          path="/collections/anime-kawaii-cartoon-bedroom-pillows/products/:id"
          element={<PillowProductPage />}
        />
        <Route
          path="/collections/sad-aesthetic/products/:id"
          element={<SadAestheticProductPage />}
        />
        <Route
          path="/collections/japanese-senpai-shirts-and-hoodies/products/:id"
          element={<SenpaiProductPage />}
        />
        <Route
          path="/collections/anime-tee-shirts/products/:id"
          element={<ShirtProductPage />}
        />
        <Route
          path="/collections/anime-socks/products/:id"
          element={<SockProductPage />}
        />
        <Route
          path="/collections/vaporwave-aesthetic-clothing-tees-hoodies-merch/products/:id"
          element={<VaporwaveProductPage />}
        />
        <Route
          path="/collections/japanese-waifu-shirts-and-hoodies/products/:id"
          element={<WaifuProductPage />}
        />
        {/* Instruction */}
        <Route path="/instruction" element={<Instruction />} />
      </Route>
      <Route path="/" element={<Footer />} />
    </Routes>
  );
}

export default App;
