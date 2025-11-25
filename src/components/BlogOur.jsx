import React from "react";
import Our from "./Our";
import { Link } from "react-router-dom";

export default function BlogOur() {
  return (
    <section className="blog-our">
      <div className="blog-our__inner">
        <div className="blog-our__top">
          <Our />
        </div>
        <div className="container">
          <ul className="Blog-our__list">
            <li className="Blog-our__item">
              <h3 className="our__item-title">
                How to plant spinach correctly in winter
              </h3>
              <p className="our__item-text">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <Link to="/blog" className="our__item-btn">
                Read
              </Link>
            </li>
            <li className="Blog-our__item">
              <h3 className="our__item-title">
                How to plant spinach correctly in winter
              </h3>
              <Link to="/blog" className="our__item-btn">
                Read
              </Link>
            </li>
            <li className="Blog-our__item">
              <h3 className="our__item-title">
                How to plant spinach correctly in winter
              </h3>
              <p className="our__item-text">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <Link to="/blog" className="our__item-btn">
                Read
              </Link>
            </li>
            <li className="Blog-our__item">
              <h3 className="our__item-title">
                How to plant spinach correctly in winter
              </h3>
              <p className="our__item-text">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <Link to="/blog" className="our__item-btn">
                Read
              </Link>
            </li>
            <li className="Blog-our__item">
              <h3 className="our__item-title">
                How to plant spinach correctly in winter
              </h3>
              <p className="our__item-text">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <Link to="/blog" className="our__item-btn">
                Read
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
