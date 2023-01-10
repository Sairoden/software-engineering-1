import { useState, useEffect } from "react";
import Card from "../../CardProduct/CardProduct";
import Footer from "../../Footer/Footer";
import "../Shop.css";
import { homegoods } from "../../../data";
import { Pagination, Select } from "antd";
import { Link } from "react-router-dom";

const { Option } = Select;

const initialState = homegoods.filter(item => {
  return item.keywords.includes("Pillow");
});

const Pillows = () => {
  const numOnEachPage = 18;
  const [data, setData] = useState(initialState);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(numOnEachPage);

  useEffect(() => {});
  const filterOnChange = value => {
    if (value === "All") {
      return setData(initialState);
    } else {
      const filteredData = initialState;
      const filter = filteredData.filter(item => {
        return item.keywords.includes(value);
      });
      return setData(filter);
    }
  };

  const sortByOnChange = value => {
    if (value === "Best selling") {
      const sorting = data.sort((a, b) => {
        if (a.id < b.id) {
          //sort string ascending
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
      const newArr = [];
      for (let i = 0; i < sorting.length; i++) {
        newArr.push(sorting[i]);
      }
      setData(newArr);
    } else if (value === "Price, low to high") {
      const sorting = data.sort((a, b) => {
        if (a.price < b.price)
          //sort string ascending
          return -1;
        if (a.price > b.price) return 1;
        return 0;
      });
      const newArr = [...sorting];
      setData(newArr);
    } else if (value === "Price, high to low") {
      const sorting = data.sort((a, b) => {
        if (a.price > b.price)
          //sort string descending
          return -1;
        if (a.price > b.price) return 1;
        return 0;
      });
      const newArr = [...sorting];
      setData(newArr);
    } else {
      console.log("no");
    }
  };
  const handleChange = value => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(numOnEachPage);
    } else {
      setMinValue((value - 1) * numOnEachPage);
      setMaxValue(value * numOnEachPage);
    }
  };

  return (
    <>
      <div className="product_page">
        <div className="title">Pillows</div>

        <div className="filter">
          Filter by
          <Select
            defaultValue="All"
            style={{ width: 320 }}
            onChange={filterOnChange}
            className="select"
          >
            <Option value="All">All</Option>
            <Option value="Kawaii">Kawaii</Option>
            <Option value="Totoro">My Neighbor Totoro</Option>
            <Option value="Sailor Moon">Sailor Moon</Option>
          </Select>
        </div>
        <div className="sortBy">
          {" "}
          Sort by
          <Select
            defaultValue="Best selling"
            style={{ width: 170 }}
            onChange={sortByOnChange}
            className="select"
          >
            <Option value="Best selling">Best selling</Option>
            <Option value="Price, low to high">Price, low to high</Option>
            <Option value="Price, high to low">Price, high to low</Option>
          </Select>
        </div>
        <div className="container">
          {data &&
            data.length > 0 &&
            data.slice(minValue, maxValue).map(item => {
              const productUrl = item => {
                if (item.keywords.includes("Pillow")) {
                  return "anime-kawaii-cartoon-bedroom-pillows";
                } else if (item.keywords.includes("Lights")) {
                  return "3d-led-anime-bedroom-lights-lamps";
                }
              };
              return (
                <Link
                  to={`/collections/${productUrl(item)}/products/${item.id}`}
                  className="link overlay"
                  key={item.id}
                >
                  <Card className="product_card " item={item} key={item.id} />
                </Link>
              );
            })}
        </div>
        <Pagination
          className="pagination"
          defaultPageSize={numOnEachPage}
          showSizeChanger={false}
          onChange={handleChange}
          total={data.length}
        />
      </div>
      <Footer />
    </>
  );
};

export default Pillows;
