import { Link } from "react-router-dom";
import BlogHero from "../components/BlogHero";
import Our from "../components/Our";
import BlogOur from "../components/BlogOur";

export default function Blog() {
  return (
    <>
      <BlogHero
        title="Welcome to our blog"
        text=" Here you can find a lot of interesting and useful information that
            you need in gardening and creating a beautiful garden
      "
      />
      <BlogOur />
    </>
  );
}
