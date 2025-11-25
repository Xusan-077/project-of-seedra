import { useDispatch } from "react-redux";
import { addToCart, addToInCart, removeFromCart } from "../store/cartSlice";

import minus from "../assets/icons/Minus.svg";
import add from "../assets/icons/Add.svg";
import { useNavigate } from "react-router-dom";

export default function SavatItem({ id, image, name, price, count, product }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <li className="cart__item">
      <img
        onClick={() => navigate(`/product/${id}`)}
        src={image}
        alt=""
        className="cart__img"
      />
      <h2 className="cart__title">{name}</h2>
      <div className="product-item__incart-div">
        <button
          disabled={count === 0}
          onClick={() => dispatch(removeFromCart(product))}
          className="product-item__incart-minus-btn"
        >
          <img src={minus} alt="" className="product-item__incart-minus-img" />
        </button>

        <span className="product-item__incart-count-span">{count}</span>

        <button
          onClick={() => dispatch(addToInCart(product))}
          className="product-item__incart-add-btn"
        >
          <img src={add} alt="" className="product-item__incart-add-img" />
        </button>
      </div>
      <span className="cart__price">${price}</span>
      <span className="cart__total-price">${(price * count).toFixed(2)}</span>
    </li>
  );
}
