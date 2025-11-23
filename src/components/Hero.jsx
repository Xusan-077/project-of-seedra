import Olov from "../assets/icons/hero__olov.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__top">
            <div className="hero__left">
              <h1 className="hero__title">
                SEEDRA Basil Seeds for Indoor and Outdoor Planting
              </h1>
              <p className="hero__text">
                Be sure of our quality - the freshest batches of this season.
                Non-GMO, Heirloom - our seeds were tested and have the best
                germination ratings. Your easy growing experience is our
                guarantee
              </p>

              <div className="hero__bottom">
                <div className="hero__bottom-left">
                  <img src={Olov} alt="" />
                  <span className="hero__bottom-left-span-1">$12.56</span>
                  <span className="hero__bottom-left-span-2">$15.56</span>
                </div>
                <div className="hero__bottom-right">
                  <button className="hero__bottom-left-add">Add to card</button>
                  <button className="hero__bottom-left-discover">
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__bottom-second">
            <h2 className="hero__subtitle">We sell seeds</h2>
            <p className="hero__description">
              that always sprout and gardening supplies which never break
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
