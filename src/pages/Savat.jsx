import { useSelector } from "react-redux";
import SavatItem from "../components/SavatItem";
import { Input } from "@mantine/core";

export default function Savat() {
  const { carts } = useSelector((state) => state.cart);

  const totalPrice = carts.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <section className="savat">
      <div className="container">
        <div className="savat__inner">
          <div className="savat__inner-left">
            <div className="savat__top">
              <h2 className="savat__title">Your cart.</h2>
              <span className="savat__length">{carts.length} items</span>
            </div>
            <div className="savat__bottom">
              <div className="savat__bottom-top">
                <span className="savat__details">PRODUCT DETAILS</span>
                <div className="savat__detail-right">
                  <span className="savat__details">AMOUNT</span>
                  <span className="savat__details">PRICE</span>
                  <span className="savat__details">TOTAL</span>
                </div>
              </div>

              <ul className="savat__list">
                {carts.map((el) => (
                  <SavatItem key={el.id} product={el} {...el} />
                ))}
              </ul>
            </div>
          </div>
          <div className="savat__inner-right">
            <h3 className="savat__left-title">Order summary</h3>
            <div className="savat__right-middle">
              <span className="savat__savat__right-length">
                {carts.length} items
              </span>
              <span className="savat__savat__right-prive">
                $ {totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="savat__right-bottom">
              <div className="savat__right-bottom-top">
                <lable
                  className="savat__right-bottom-Promocode-wrapper"
                  label="Promocode"
                >
                  Promocode
                  <input
                    className="savat__right-bottom-Promocode-inp"
                    placeholder="Promocode"
                  />
                </lable>
              </div>
              <div className="savat__right-bottom-bottom">
                <span className="savat__right-bottom-bottom-Total">
                  Total amount
                </span>
                <span className="savat__right-bottom-bottom-sum">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button className="savat__right-bottom-btn">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
