import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

export default function Likes() {
  const dispatch = useDispatch();
  const { likes } = useSelector((state) => state.like);

  return (
    <section className="likes">
      <div className="container">
        <div className="likes__inner">
          <h2 className="likes__title">sorted</h2>

          <ul className={`${likes.length ? "likes__list" : ""}`}>
            {likes.length ? (
              likes.map((el) => (
                <ProductItem key={el.id} product={el} {...el} />
              ))
            ) : (
              <div className="">
                <p className="likes__empty">No Sorted Product Yet</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
