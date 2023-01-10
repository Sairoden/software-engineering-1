import { createContext, useState, useEffect } from "react";

const addWishListItem = (wishListItems, productToAdd, setToggleHeart) => {
  const existingWishListItem = wishListItems.find(
    wishListItem => wishListItem.id === productToAdd.id
  );

  if (existingWishListItem) {
    setToggleHeart(false);

    return wishListItems.filter(
      wishListItem => wishListItem.id !== productToAdd.id
    );
  }

  setToggleHeart(true);
  return [...wishListItems, { ...productToAdd, toggleHeart: true }];
};

export const WishListContext = createContext({
  wishListItems: [],
  addItemToWishList: () => {},
});

export const WishListProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState([]);
  const [toggleHeart, setToggleHeart] = useState(false);

  // useEffect(() => {
  //   setWishListItems([...wishListItems, {...}]);
  // }, [wishListItems]);

  const addItemToWishList = productToAdd => {
    setWishListItems(
      addWishListItem(wishListItems, productToAdd, setToggleHeart)
    );
  };

  const value = { wishListItems, addItemToWishList, toggleHeart };
  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};
