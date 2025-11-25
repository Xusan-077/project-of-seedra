import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";

import instagram from "../assets/icons/footer-instagram.svg";
import facebook from "../assets/icons/footer-facebook.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__inner-responsive">
            <div className="footer__inner-responsive-top">
              <Link to="/" className="footer__logo-responsive-link">
                <img src={Logo} alt="" className="footer__logo-responsive" />
              </Link>
              <ul className="footer__list footer__list--active">
                {[
                  {
                    path: "",
                    text: "ALL PRODUCTS",
                  },
                  {
                    path: "terms",
                    text: "Terms&Conditions",
                  },
                  {
                    path: "about",
                    text: "ABOUT SEEDRA",
                  },
                  {
                    path: "privacy",
                    text: "Privacy Policy",
                  },
                  {
                    path: "blog",
                    text: "OUR BLOG",
                  },
                ].map((el) => (
                  <li key={el.text} className="footer__item">
                    <NavLink
                      className={`${({ isActive }) =>
                        isActive
                          ? "active"
                          : ""} footer__link footer__link--active`}
                      to={`/${el.path}`}
                    >
                      {el.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer__inner-top">
            <ul className="footer__list">
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
              ].map((el) => (
                <li key={el.text} className="footer__item">
                  <NavLink
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""} footer__link`}
                    to={`/${el.path}`}
                  >
                    {el.text}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link to="/" className="footer__logo-link">
              <img src={Logo} alt="" className="footer__logo" />
            </Link>
            <ul className="footer__list">
              {[
                {
                  path: "terms",
                  text: "Terms&Conditions",
                },
                {
                  path: "privacy",
                  text: "Privacy Policy",
                },
              ].map((el) => (
                <li key={el.text} className="footer__item">
                  <NavLink
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""} footer__link`}
                    to={`/${el.path}`}
                  >
                    {el.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__inner-bottom">
            <div className="footer-icons">
              <img src={instagram} alt="" className="footer-icon" />
              <img src={facebook} alt="" className="footer-icon" />
            </div>
            <span className="footer__bottom-right">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
