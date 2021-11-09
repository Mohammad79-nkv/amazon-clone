import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import {useLocation} from "react-router"
import { useStateValue } from "./../Store/StateProvider";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const {pathname} = useLocation()
  // console.log(pathname);
  if(pathname ==="/login" || pathname ==="/register") {
    return null
  }
  const handleAuthentication = () => {
    if(user){
      toast.warn(`${user.email} Sign out !`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      auth.signOut()
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header-logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            {user && <span className="header__optionLineOne">Hello {user?.email}</span>}
            <span className="header__optionLineTwo">{user ? "Sign out" : "Sign in"}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Rrime</span>
        </div>
        <Link to="checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
<div className="header">
  <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
</div>;
