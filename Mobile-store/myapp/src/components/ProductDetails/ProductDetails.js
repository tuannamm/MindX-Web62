import React from "react";

const ProductDetails = (props) => {
  const { selectedProduct } = props;
  console.log(selectedProduct);

  return (
    <>
      {selectedProduct && (
        <div className="d-flex align-items-center justify-content-between">
          <img src={selectedProduct?.img} alt="" />
          <div>
            <h1>{selectedProduct?.name}</h1>
            <h2>{selectedProduct?.price}</h2>
            <h5>{selectedProduct?.info?.screen}</h5>
            <h5>{selectedProduct?.info?.os}</h5>
            <h5>{selectedProduct?.info?.frontCamera}</h5>
            <h5>{selectedProduct?.info?.backCamera}</h5>
            <h5>Ram: {selectedProduct?.ram}</h5>
            <h5>Rom: {selectedProduct?.rom}</h5>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
