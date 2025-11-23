import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";

import instagram from "../assets/icons/indtagram-icon.svg";
import facebook from "../assets/icons/facebook-icons.svg";
import heart from "../assets/icons/heart-icon.svg";
import savat from "../assets/icons/savat-icon.svg";
import { useDispatch } from "react-redux";
import { changeSearch } from "../store/searchSlice";

export default function Header() {
  const dispatch = useDispatch();

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

          <div className="header__search-div">
            <input
              onChange={(e) => dispatch(changeSearch(e.target.value))}
              type="text"
              placeholder="Search"
              className="header__search"
            />
            <div className="header__btn-group">
              <Link to="/likes" className="header__btn">
                <img src={heart} alt="" className="header__heart" />
              </Link>
              <Link to="/savat" className="header__btn">
                <img src={savat} alt="" className="header__savat" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
