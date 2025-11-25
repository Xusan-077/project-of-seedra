import BlogHero from "../components/BlogHero";
import Grow from "../components/Grow";

import growImg from "../assets/images/grow__img.png";
import growImg2 from "../assets/images/grow-Img2.png";

export default function About() {
  return (
    <>
      <BlogHero
        title="Who we are and what we do"
        text="Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden"
      />
      <Grow
        img={growImg}
        title="Seedra helps to grow fast and efficiant"
        text1="  SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George"
        text2=" Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. Your easy growing experience is our guarantee
              Spinach commom culinary uses: salads, soups, smoothies, lasagne,
              pizza, pies, risotto, and more"
        text4="   Proudly sourced in the USA - our garden seeds are grown,
                            harvested, and packaged in the USA. We support local farmers and
                            are happy to produce this American-made product"
      />
      <Grow
      row
        img={growImg2}
        title="Our story"
        text1="SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George"
        text2="
Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. 
  Your easy growing experience is our guarantee
Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more"
        text3="  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product"
      />
    </>
  );
}
