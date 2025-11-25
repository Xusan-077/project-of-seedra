export default function Grow({ row, img, title, text1, text2, text3 }) {
  return (
    <section className="grow">
      <div className="container">
        <div className={`${row ? "grow__inner active" : "grow__inner"}`}>
          <div className="grow__left">
            <h2 className="grow__title">{title}</h2>

            <p className="grow__text">
              {text1}
              <br />
              <br />

              {text2}

              <br />
              <br />

              {text3}
            </p>
          </div>
          <img src={img} alt="" className="our__img" />
        </div>
      </div>
    </section>
  );
}
