export default function BlogHero({ title, text }) {
  return (
    <section className="blog-hero">
      <div className="container">
        <div className="blog-hero__inner">
          <h1 className="blog-hero__title">{title}</h1>
          <p className="blog-hero__text">{text}</p>
        </div>
      </div>
    </section>
  );
}
