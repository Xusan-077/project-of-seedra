import { Link } from "react-router-dom";

export default function Our() {
  return (
    <section className="our">
      <div className="container">
        <div className="our__inner">
          <div className="our__top">
            <h2 className="our__title">Our blog.</h2>
            <Link to="/blog" className="our__top-link">
              Go to our blog
            </Link>
          </div>

          <ul className="our__list">
            <li className="our__item">
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
            <li className="our__item">
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
            <li className="our__item">
              <h3 className="our__item-title">
                How to plant spinach correctly in winter
              </h3>
              <Link to="/blog" className="our__item-btn">
                Read
              </Link>
            </li>
            <li className="our__item">
              <h3 className="our__item-title">
                How to plant spinach correctly in winter
              </h3>
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
