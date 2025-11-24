import { Flex, Group, Input, Skeleton, Text } from "@mantine/core";

import { useEffect, useState } from "react";
import { API } from "../API";
import ProductItem from "../components/ProductItem";

import { useSelector } from "react-redux";
import { productsData } from "../Constants/Products";

export default function SearchPage() {
  const { search } = useSelector((state) => state.search);

  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [loading, setLoading] = useState(false);

  console.log(products);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const filtred = products.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtred);
  }, [search, products]);

  return (
    <section className="products">
      <div className="products__inner">
        <div className="container">
          <Flex
            style={{
              justifyContent: "space-between",
            }}
            className=""
          >
            <Text size="36px" fw={600} mb={40} className="products__title">
              Our products.
            </Text>
          </Flex>
          <ul
            className={`${
              filteredProducts.length > 0 ? "products__top-list" : ""
            }`}
          >
            {loading ? (
              Array.from({ length: 6 }).map((el, index) => (
                <li key={index} className="product-item">
                  <Skeleton height={300} width={300} radius="lg" />

                  <div className="product-item__details">
                    <Group spacing="xs" mt="sm">
                      <Skeleton height={20} width={100} radius="sm" />
                      <Skeleton height={20} width={40} radius="sm" />
                    </Group>

                    <Skeleton height={24} width="100%" mt="sm" radius="sm" />
                    <Skeleton height={24} width="70%" mt="sm" radius="sm" />

                    <Group
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      position="apart"
                      mt="md"
                    >
                      <Skeleton height={20} width={70} radius="lg" />
                      <Skeleton height={50} width={50} radius="lg" />
                    </Group>
                  </div>
                </li>
              ))
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((el) => (
                <ProductItem key={el.id} product={el} {...el} />
              ))
            ) : (
              <div className="no-products">
                <p>Mahsulotlar topilmadi</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
