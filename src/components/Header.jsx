import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";

import instagram from "../assets/icons/indtagram-icon.svg";
import facebook from "../assets/icons/facebook-icons.svg";
import heart from "../assets/icons/heart-icon.svg";
import savat from "../assets/icons/savat-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../store/searchSlice";

import burgerImg from "../assets/icons/burger.svg";
import arrow from "../assets/icons/arrow-down.svg";
import { useState } from "react";

export default function Header() {
  const [burger, setBurger] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { carts } = useSelector((state) => state.cart);
  const { likes } = useSelector((state) => state.like);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo-link">
            <img src={Logo} alt="" className="header__logo" />
          </Link>

          <nav>
            <ul className="header__list">
              {[
                {
                  path: "",
                  text: "ALL PRODUCTS",
                },
                {
                  path: "about",
                  text: "ABOUT SEEDRA",
                },
                {
                  path: "blog",
                  text: "OUR BLOG",
                },
                {
                  path: "contacts",
                  text: "CONTACTS",
                },
              ].map((el) => (
                <li key={el.text} className="header__item">
                  <NavLink
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""} header__link`}
                    to={`/${el.path}`}
                  >
                    {el.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__icons">
            <img src={instagram} alt="" className="" />
            <img src={facebook} alt="" className="" />
          </div>

          <div className="header-content">
            <div className="header__search-div">
              <input
                onChange={(e) => {
                  if (e.target.value.trim() != "") {
                    navigate("/search");
                  } else {
                    navigate("/");
                  }
                  dispatch(changeSearch(e.target.value.trim()));
                }}
                type="text"
                placeholder="Search"
                className="header__search"
              />
              <div className="header__btn-group">
                <Link to="/likes" className="header__btn header__btn--active">
                  <div className="header__like-div">
                    {likes.length ? (
                      <div className="header__like-length">{likes.length}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <img src={heart} alt="" className="header__heart" />
                </Link>
                <Link to="/savat" className="header__btn">
                  <div className="header__cart-div">
                    {carts.length ? (
                      <div className="header__cart-length">{carts.length}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <img src={savat} alt="" className="header__savat" />
                </Link>
              </div>
            </div>

            <button
              onClick={() => (burger ? setBurger(false) : setBurger(true))}
              className="header___burger"
            >
              <img src={burgerImg} alt="" className="header__burger-img" />
            </button>
          </div>
        </div>

        {burger ? (
          <div className="header__burger-div">
            <div className="header__burger-search-div">
              <input
                onChange={(e) => {
                  if (e.target.value.trim() != "") {
                    navigate("/search");
                  } else {
                    navigate("/");
                  }
                  dispatch(changeSearch(e.target.value.trim()));
                }}
                type="text"
                placeholder="Search"
                className="header__burger-search"
              />
            </div>
            <ul className="header__burger-list">
              <li className="header__burger-item">
                <span className="header__burger-item-span">All vegetables</span>
                <img src={arrow} alt="" className="header__burger-arrow" />
              </li>
              <li className="header__burger-item">
                <span className="header__burger-item-span">Bundles</span>
                <img src={arrow} alt="" className="header__burger-arrow" />
              </li>
              <li className="header__burger-item">
                <span className="header__burger-item-span">Herbs</span>
                <img src={arrow} alt="" className="header__burger-arrow" />
              </li>
              <li className="header__burger-item">
                <span className="header__burger-item-span">Vegetables</span>
                <img src={arrow} alt="" className="header__burger-arrow" />
              </li>
              <li className="header__burger-item">
                <span className="header__burger-item-span">Fruits</span>
                <img src={arrow} alt="" className="header__burger-arrow" />
              </li>
              <li className="header__burger-item">
                <span className="header__burger-item-span">Supplies</span>
                <img src={arrow} alt="" className="header__burger-arrow" />
              </li>
              <li className="header__burger-item">
                <span className="header__burger-item-span">Flowers</span>
                <img src={arrow} alt="" className="header__burger-arrow" />
              </li>
            </ul>

            <div className="header__burger-middle">
              <NavLink
                className={`${({ isActive }) =>
                  isActive ? "active" : ""} header__burger-link`}
                to="/blog"
              >
                Our blog
              </NavLink>
              <NavLink
                className={`${({ isActive }) =>
                  isActive ? "active" : ""} header__burger-link`}
                to="/about"
              >
                About Seedra
              </NavLink>
            </div>
            <div className="header__burger-bottom">
              <img src={instagram} alt="" className="" />
              <img src={facebook} alt="" className="" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
