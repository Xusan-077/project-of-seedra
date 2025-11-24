import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLike } from "../store/likeSlice";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { useParams } from "react-router-dom";
import { productsData } from "../Constants/Products";

import unlike from "../assets/icons/unlike.svg";
import like from "../assets/icons/like.svg";

import detailImg1 from "../assets/images/detail-img-1.png";
import detailImg2 from "../assets/images/detail-img-2.png";
import detailImg3 from "../assets/images/detail-img-3.png";
import detailImg4 from "../assets/images/detail-img-4.png";
import detailImg5 from "../assets/images/detail-img-5.png";
import detailImg6 from "../assets/images/detail-img-6.png";

import minus from "../assets/icons/Minus.svg";
import add from "../assets/icons/Add.svg";

export default function ProductDetailPage() {
  const [changed, setChange] = useState(1);

  const dispatch = useDispatch();
  const { likes } = useSelector((state) => state.like);
  const { carts } = useSelector((state) => state.cart);

  const params = useParams();

  const find = productsData.find((el) => el.id == params.productId);

  console.log(find);

  const isLiked = likes.some((el) => el.id == params.productId);

  console.log(carts);

  const inCart = carts.find((el) => el.id == find.id);

  return (
    <section className="detail">
      <div className="container">
        <div className="detail__inner">
          <div className="detail__inner-top">
            <div className="left">
              <h2 className="detail__title--active">{find.name}</h2>

              <div className="detail__img-div">
                <img src={find.image} alt="" className="detail__img" />
              </div>
              <div className="detail__left-bottom">
                {[
                  detailImg1,
                  detailImg2,
                  detailImg3,
                  detailImg4,
                  detailImg5,
                  detailImg6,
                ].map((el, index) => (
                  <img
                    key={index}
                    src={el}
                    alt=""
                    className="detail__detail-img"
                  />
                ))}
              </div>
            </div>
            <div className="detail__right">
              <h2 className="detail__title">{find.name}</h2>
              <div className="detail__btns">
                <span className="detail__available">AVAILABLE</span>
                <span className="detail__vegetable">VEGETABLES</span>
              </div>

              <ol className="detail__list">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li
                    key={index}
                    className={`${
                      index + 1 == changed ? "active" : ""
                    } detail__item`}
                  >
                    <div className="">
                      <input
                        checked={index + 1 == changed}
                        onChange={() => setChange(index + 1)}
                        type="radio"
                        name="count"
                      />
                      <span className="detail__item-span">
                        {index + 1} pack
                      </span>
                    </div>
                    <div className="">
                      <span className="detail__start">start from</span>
                      <span className="detail__started-price">
                        ${(find.price * (index + 1)).toFixed(2)}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="detail__right-bottom">
                <span className="detail__price">
                  ${(find.price * changed).toFixed(2)}
                </span>
                <div className="detail__bottom-right">
                  <div
                    className={`detail__right-bottom__bottom ${
                      isLiked ? "active" : ""
                    }`}
                  >
                    <button
                      className={`product-item__like ${
                        isLiked ? "active" : ""
                      }`}
                      onClick={() => dispatch(addToLike(find))}
                    >
                      {isLiked ? <img src={like} /> : <img src={unlike} />}
                    </button>
                  </div>
                  {inCart && inCart.count > 0 ? (
                    <div className="detail__incart-div">
                      <button
                        disabled={inCart.count === 0}
                        onClick={() => dispatch(removeFromCart(find))}
                        className="detail__incart-minus-btn"
                      >
                        <img
                          src={minus}
                          alt=""
                          className="detail__incart-minus-img"
                        />
                      </button>
                      <span className="detail__incart-count-span">
                        {inCart.count}
                      </span>
                      <button
                        onClick={() => dispatch(addToCart(find))}
                        className="detail__incart-add-btn"
                      >
                        <img
                          src={add}
                          alt=""
                          className="detail__incart-add-img"
                        />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => dispatch(addToCart(find))}
                      className="detail__add-cart"
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="detail__inner-bottom">
            <h2 className="detail__information">Product information.</h2>

            <div className="detail__information-top">
              <ul className="detail__information-list">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className="detail__information-item">
                    <p className="detail__information-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cupiditate aliquam similique placeat omnis asperiores
                      labore minus dolore laborum iure, sed quaerat esse quas?
                      Iure, tempora.
                    </p>
                  </li>
                ))}
              </ul>

              <div className="detail__information-bottom">
                <div className="detail__information-div">
                  <span className="detail__information-title">
                    Package Dimensions
                  </span>
                  <span className="detail__information-size">
                    5.51 x 3.5 x 0.35 inches
                  </span>
                </div>
                <div className="detail__information-div">
                  <span className="detail__information-title">Item Weight</span>
                  <span className="detail__information-size">0.317 ounces</span>
                </div>
                <div className="detail__information-div">
                  <span className="detail__information-title">ASIN</span>
                  <span className="detail__information-size">B08Z3HN5MP</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
