import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/SearchSharp";
import ShopingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  console.log(basket);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/**logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/**searchBar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/**buch of link having same style */}

      <div className="header__nav">
        <Link className="header__link" to={!user && "/login"}>
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">return</span>
            <span className="header__optionLineTwo">& Order</span>
          </div>
        </Link>
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            {/**shoping basket icon */}
            <ShopingBasketIcon />
            {/**no. of items in the basket */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      {/**searchBar */}
    </nav>
  );
}

export default Header;
