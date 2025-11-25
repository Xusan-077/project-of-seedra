import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function Layout() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.onscroll = handleScroll;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        onClick={scrollToTop}
        className={`back-to-top ${scroll >= 400 ? "show" : "hide"}`}
      >
        <i className="bi bi-arrow-up-short"></i>
      </div>

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
