import Grow from "../components/Grow";
import Hero from "../components/Hero";
import Our from "../components/Our";
import Ourproducts from "../components/Ourproducts";

import growImg from "../assets/images/grow__img.png";

export default function Products() {
  return (
    <>
      <Hero />
      <Ourproducts />
      <Our />
      <Grow
        img={growImg}
        row
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
    </>
  );
}
