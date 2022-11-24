import { useState, useEffect } from "react";
import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Search from "../../components/Search/Search";
const HomePage = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Samsung Galaxy A10",
      price: "40906000",
      img: "images/samsung-galaxy.jpeg",
      info: {
        screen: "AMOLED Full HD 9.0",
        os: "Android 9.0",
        frontCamera: "20MP",
        backCamera: "Chính 48MB, phụ 30MP",
      },
      ram: "4 GB",
      rom: "64 GB",
    },
    {
      id: 2,
      name: "IPhone12",
      price: "200306000",
      img: "images/iphone-12.jpeg",
      info: {
        screen: "Full HD 12.0",
        os: "IOS 14",
        frontCamera: "20MP",
        backCamera: "Chính 100MB, phụ 30MP",
      },
      ram: "16 GB",
      rom: "32 GB",
    },
    {
      id: 3,
      name: "Xiaomi Note 10",
      price: "10005000",
      img: "images/xiaomi-redmi-note-10-5g.jpeg",
      info: {
        screen: "OLED 10.0",
        os: "Android 8.0",
        frontCamera: "69MP",
        backCamera: "Chính 96MB, phụ 30MP",
      },
      ram: "10 GB",
      rom: "64 GB",
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const { cart, setCart } = useState([]); // manage cart
  const [selectedProduct, setSelectedProduct] = useState(null); // xem chi tiết sản phẩm

  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  const onViewProductDetail = (id) => {
    const product = initialProducts.find((product) => product.id === id);
    setSelectedProduct(product);
  };

  return (
    <div className="container">
      <Search />
      <ProductList
        products={products}
        onViewProductDetail={onViewProductDetail}
      />
      <ProductDetails selectedProduct={selectedProduct} />
    </div>
  );
};

export default HomePage;
