import { useNavigate } from "react-router-dom";
import savat from "../assets/icons/savat-icon.svg";
import heard from "../assets/icons/heart-icon.svg";
import star from "../assets/icons/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToLike } from "../store/likeSlice";

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

  const navigate = useNavigate();

  const isLiked = likes.some((el) => el.id == id);

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
          <i
            className={`product-item-like-img detail__heard bi bi-heart ${
              isLiked ? "active" : ""
            }`}
          ></i>
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
          <button className="product-item__btn">
            <img src={savat} alt="cart" className="product-item__cart-icon" />
          </button>
        </div>
      </div>
    </li>
  );
}
