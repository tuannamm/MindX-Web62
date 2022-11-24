import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from "../../context/Cart/CartContext";

const Products = (props) => {
  const cartCtx = useContext(CartContext);
  const { dispatch } = cartCtx;

  const { product, onViewProductDetail } = props;
  const { name, id, img, price } = product;

  const onAddToCart = (product) => {
    const action = {
      type: "ADD_TO_CART",
      payload: product,
    };

    dispatch(action);
  };
  return (
    <>
      <Card id={id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="price">
            <span>{price}</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <Button
              variant="primary"
              className="btn btn-danger"
              onClick={() => onAddToCart(product)}
            >
              Add to cart
            </Button>
            <Button
              onClick={() => onViewProductDetail(id)}
              variant="primary"
              className="btn btn-primary"
            >
              Detail
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Products;
