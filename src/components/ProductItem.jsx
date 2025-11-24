import { useNavigate } from "react-router-dom";
import savat from "../assets/icons/savat-icon.svg";
import minus from "../assets/icons/Minus.svg";
import add from "../assets/icons/Add.svg";
import unlike from "../assets/icons/unlike.svg";
import like from "../assets/icons/like.svg";
import star from "../assets/icons/star.svg";

import { useDispatch, useSelector } from "react-redux";
import { addToLike } from "../store/likeSlice";
import { addToCart, removeFromCart } from "../store/cartSlice";

export default function ProductItem({
  product,
  id,
  image,
  name,
  price,
  reviewCount,
}) {
  const dispatch = useDispatch();
  const { likes } = useSelector((state) => state.like);
  const { carts } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const isLiked = likes.some((el) => el.id == id);
  const inCart = carts.find((el) => el.id == id);

  return (
    <li className="product-item">
      <img
        onClick={() => navigate(`/product/${id}`)}
        src={image}
        alt=""
        className="product-item__image"
      />

      <div className="product-item-like-div">
        <button
          className={`product-item__like ${isLiked ? "active" : ""}`}
          onClick={() => dispatch(addToLike(product))}
        >
          <img src={isLiked ? like : unlike} />
        </button>
      </div>

      <div className="product-item__details">
        <div className="product-item__rating-wrapper">
          <div className="product-item__stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={star}
                alt="star"
                className="product-item__star"
              />
            ))}
          </div>
          <span className="product-item__review-count">({reviewCount})</span>
        </div>

        <h3 className="product-item__title">{name}</h3>

        <div className="product-item__bottom">
          <span className="product-item__price">${price}</span>

          {inCart ? (
            <div className="product-item__incart-div">
              <button
                disabled={inCart.count === 0}
                onClick={() => dispatch(removeFromCart(inCart))}
                className="product-item__incart-minus-btn"
              >
                <img
                  src={minus}
                  alt=""
                  className="product-item__incart-minus-img"
                />
              </button>

              <span className="product-item__incart-count-span">
                {inCart.count}
              </span>

              <button
                onClick={() => dispatch(addToCart(product))}
                className="product-item__incart-add-btn"
              >
                <img
                  src={add}
                  alt=""
                  className="product-item__incart-add-img"
                />
              </button>
            </div>
          ) : (
            <button
              onClick={() => dispatch(addToCart(product))}
              className="product-item__btn"
            >
              <img src={savat} alt="cart" className="product-item__cart-icon" />
            </button>
          )}
        </div>
      </div>
    </li>
  );
}
