import React from "react";
import Product from "../Product/Product";

const ProductList = (props) => {
  const { products, onViewProductDetail } = props;
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ gap: "8px" }}
    >
      {products &&
        products.map((product) => {
          return (
            <Product
              onViewProductDetail={onViewProductDetail}
              id={product.id}
              name={product.name}
              img={product.img}
              price={product.price}
            />
          );
        })}
    </div>
  );
};

export default ProductList;
