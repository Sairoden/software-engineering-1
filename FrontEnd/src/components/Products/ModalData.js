export const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  return obj;
};

export const columns = [
  { 
    title: "SIZE",
    dataIndex: "size",
    render: renderContent,
  },
  {
    title: "XS",
    dataIndex: "xs",
    render: renderContent,
  },
  {
    title: "S",
    dataIndex: "s",
    render: renderContent,
  },
  {
    title: "M",
    dataIndex: "m",
    render: renderContent,
  },
  {
    title: "L",
    dataIndex: "l",
    render: renderContent,
  },
  {
    title: "XL",
    dataIndex: "xl",
    render: renderContent,
  },
  {
    title: "1X",
    dataIndex: "1x",
    render: renderContent,
  },
  {
    title: "2X",
    dataIndex: "2x",
    render: renderContent,
  },
  {
    title: "3X",
    dataIndex: "3x",
    render: renderContent,
  },
];

export const tShirtData = [
  {
    key: "1",
    size: "WIDTH (IN)",
    xs: "16",
    s: "18",
    m: "20",
    l: "22",
    xl: "24",
    "1x": "26",
    "2x": "28",
    "3x": "30",
  },
  {
    key: "2",
    size: "LENGTH (IN)",
    xs: "27.5",
    s: "28.5",
    m: "29.5",
    l: "30.5",
    xl: "31.5",
    "1x": "32.5",
    "2x": "33.5",
    "3x": "34.5",
  },
  {
    key: "3",
    size: "SLEEVE CENTER BACK (IN)",
    xs: "14",
    s: "15.5",
    m: "17",
    l: "18.5",
    xl: "20",
    "1x": "21.5",
    "2x": "23",
    "3x": "24.5",
  },
];

export const longTShirtData = [
  {
    key: "1",
    size: "WIDTH (IN)",
    xs: "16",
    s: "18",
    m: "20",
    l: "22",
    xl: "24",
    "1x": "26",
    "2x": "28",
    "3x": "30",
  },
  {
    key: "2",
    size: "LENGTH (IN)",
    xs: "27.5",
    s: "28.5",
    m: "29.5",
    l: "30.5",
    xl: "31.5",
    "1x": "32.5",
    "2x": "33.5",
    "3x": "34.5",
  },
  {
    key: "3",
    size: "SLEEVE CENTER BACK (IN)",
    xs: "32",
    s: "33.5",
    m: "35",
    l: "36.5",
    xl: "38",
    "1x": "39.5",
    "2x": "41",
    "3x": "42.5",
  },
];

export const sweatshirtData = [
  {
    key: "1",
    size: "WIDTH (IN)",
    xs: "46",
    s: "51",
    m: "56",
    l: "61",
    xl: "66",
    "1x": "71",
    "2x": "76",
    "3x": "81",
  },
  {
    key: "2",
    size: "LENGTH (IN)",
    xs: "66",
    s: "69",
    m: "71",
    l: "74",
    xl: "76",
    "1x": "79",
    "2x": "81",
    "3x": "84",
  },
];
