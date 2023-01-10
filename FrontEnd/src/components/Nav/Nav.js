import { useState, useContext } from "react";
import {
  apparelNav,
  homegoodsNav,
  lifestyleNav,
  techAccessoriesNav,
  byAnimeNav,
  AboutUsNav,
} from "./Dropdown";
import "./Nav.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Dropdown, Drawer, Input, Menu } from "antd";
import {
  DownOutlined,
  SearchOutlined,
  HeartFilled,
  createFromIconfontCN,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { SearchInput } from "./Style";
import { apparel, homegoods, techAccessories } from "../../data.js";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import { UserContext } from "../Context/UserContext";

const products = apparel.concat(homegoods).concat(techAccessories);

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", //icon-shoppingcart
  ],
});

const { Search } = Input;
const { SubMenu } = Menu;
const Nav = () => {
  const navigate = useNavigate();
  const [searchActive, SetSearchActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const { user } = useContext(UserContext);

  const handleSearch = e => {
    e.preventDefault();

    if (e.target.value[0]) {
      const words = e.target.value.replace(/(^\w{1})|(\s+\w{1})/g, letter =>
        letter.toUpperCase()
      );

      setSearch(words);
    } else {
      setSearch("");
    }
  };

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === "Enter" && search.length > 0) {
        event.preventDefault();

        if (search.includes("App"))
          navigate("/collections/anime-clothing-apparel");
        else if (search.includes("Shi"))
          navigate("/collections/anime-tee-shirts");
        else if (search.includes("Hoo"))
          navigate("/collections/anime-hoodies-and-sweatshirts");
        else if (search.includes("Soc")) navigate("/collections/anime-socks");
        else if (search.includes("Cos"))
          navigate("/collections/anime-weeb-cosplay-accessories");
        else if (search.includes("Hom"))
          navigate("/collections/anime-weeb-cosplay-accessories");
        else if (search.includes("Lig"))
          navigate("/collections/3d-led-anime-bedroom-lights-lamps");
        else if (search.includes("Pil"))
          navigate("/collections/anime-kawaii-cartoon-bedroom-pillows");
        else if (search.includes("Kaw"))
          navigate("/collections/kawaii-livestyle-accessories");
        else if (search.includes("Nsf"))
          navigate("/collections/nsfw-anime-merch");
        else if (search.includes("Sad") || search.includes("Aes"))
          navigate("/collections/sad-aesthetic");
        else if (search.includes("Sen"))
          navigate("/collections/japanese-senpai-shirts-and-hoodies");
        else if (search.includes("Vap"))
          navigate(
            "/collections/vaporwave-aesthetic-clothing-tees-hoodies-merch"
          );
        else if (search.includes("Wai"))
          navigate("/collections/japanese-waifu-shirts-and-hoodies");
        else if (search.includes("Air"))
          navigate("/collections/anime-airpod-1-2-pro-cases");
        else if (search.includes("Pho"))
          navigate("/collections/anime-phone-cases");
        else if (search.includes("Tec"))
          navigate("/collections/anime-tech-accessories");
        else if (search.includes("Ani"))
          navigate("/collections/all-anime-merch");
        else if (search.includes("Att") || search.includes("Titan"))
          navigate("/collections/attack-on-titan-anime-merch");
        else if (search.includes("Dar"))
          navigate("/collections/darling-in-the-franxx-anime-weeb-merch");
        else if (search.includes("Dem") || search.includes("Sla"))
          navigate("/collections/demon-slayer-anime-merch");
        else if (search.includes("Drag") || search.includes("Ball"))
          navigate("/collections/dragon-ball-z-anime-merch");
        else if (search.includes("Hun"))
          navigate("/collections/hunter-x-hunter-anime-merch");
        else if (search.includes("Her") || search.includes("Acad"))
          navigate("/collections/my-hero-academia-anime-merch");
        else if (search.includes("Tot") || search.includes("Neigh"))
          navigate("/collections/my-neighbor-totoro-anime-merch");
        else if (search.includes("Nar"))
          navigate("/collections/naruto-anime-merch");
        else if (search.includes("One") || search.includes("Pie"))
          navigate("/collections/one-piece-anime-merch");
        else if (search.includes("Sail") || search.includes("Moo"))
          navigate("/collections/sailor-moon-anime-merch");
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [search]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // toggle cart function
  const [ToggleCart, setToggleCart] = useState(false);
  return (
    <>
      <div className="nav_container" id="product">
        <MenuOutlined className="nav_drawer" onClick={showDrawer} />
        <Drawer placement="left" onClose={onClose} visible={visible}>
          <div className="drawerSearch">
            <Search
              placeholder="Search"
              allowClear
              onSearch={handleSearch}
              style={{ width: 200 }}
            />
          </div>
          <Menu style={{ width: 220 }} mode="inline">
            <SubMenu key="sub1" title="Shop">
              <Menu.Item key="1">
                <Link to="/">Best Selling</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">Tee Shirts</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/">Hoodies</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/">Socks</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Accessories">
              <Menu.Item key="1">
                <Link to="/">Phone Cases</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">AirPod Cases</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="Home Goods">
              <Menu.Item key="1">
                <Link to="/">All Homegoods</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">3D LED Lights</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/">Pillows</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="Collections">
              <Menu.Item key="1">
                <Link to="/">Sad Aesthetic</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">Vaporwave</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/">NSFW</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/">Kawaii</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/">Senpai</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/">Waifu</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/">NSFW</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/">Cosplay</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="Official Merch">
              <Menu.Item key="1">
                <Link to="/">Best Selling</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">Attack On Titan</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/">Darling In The Franxx</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/">Demon Slayer</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/">Dragon Ball Z</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/">Hunter X Hunter</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/">My Hero Academia</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/">My Neighbor Totoro</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/">Naruto</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/">One Piece</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to="/">Sailor Moon</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Drawer>

        <Link to="/" className="logo">
          Isekai
        </Link>

        <nav className="nav_links">
          <Dropdown overlay={apparelNav} className="nav_link">
            <Link to="/collections/anime-clothing-apparel">
              Shop <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
          <Dropdown overlay={homegoodsNav} className="nav_link">
            <Link to="/collections/anime-homegoods">
              Homegoods <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
          <Dropdown overlay={byAnimeNav} className="nav_link">
            <Link to="/collections/all-anime-merch">
              Brands <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
          <Dropdown overlay={lifestyleNav} className="nav_link">
            <Link to="/collections/vaporwave-aesthetic-clothing-tees-hoodies-merch">
              Collections <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
          <Dropdown overlay={techAccessoriesNav} className="nav_link">
            <Link to="/collections/anime-tech-accessories">
              Tech Accessories <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
          <Dropdown overlay={AboutUsNav} className="nav_link">
            <Link to="/help/about-us">
              About Us <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
        </nav>
        <div className="search">
          <SearchOutlined
            className="search_icon"
            onClick={() => SetSearchActive(searchActive => !searchActive)}
          />

          <SearchInput
            className="searchInput"
            value={search}
            onChange={handleSearch}
            placeholder="Search"
            active={searchActive}
          />
        </div>
        <div className="nav_icons">
          <Link
            to={user === true ? "/profile" : "/login"}
            className="nav_icon stay"
          >
            <UserOutlined />
          </Link>
          <Link to="/favorite" className="nav_icon heart">
            <HeartFilled />
          </Link>
          <div className="nav_icon cart">
            <Cart isCartToggle={ToggleCart} setCartToggle={setToggleCart} />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
