import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Layout from "./components/Layout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Likes from "./pages/Likes";
import Savat from "./pages/Savat";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/savat" element={<Savat />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
