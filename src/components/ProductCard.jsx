import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  // Extract these functions from the CartContext
  const { addToCart, increase, cartItems, sumItems, itemCount } =
    useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <CardWrapper>
      <ProductImage
        src={product.image + "?v=" + product.id}
        alt={product.name}
      />
      <ProductName>{product.name}</ProductName>
      <ProductCardPrice>{formatCurrency(product.price)}</ProductCardPrice>
      <ProductCardButtons>
        {isInCart(product) && (
          <ButtonAddMore
            onClick={() => {
              increase(product);
            }}
            className="btn"
          >
            Add More
          </ButtonAddMore>
        )}

        {!isInCart(product) && (
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        )}
      </ProductCardButtons>
    </CardWrapper>
  );
};
