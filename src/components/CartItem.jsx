import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";
import { formatCurrency } from "../utils";
import TrashIcon from "/assets/icons/trash-outline.svg";
import Plus from "/assets/icons/add-circle-outline.svg";
import Minus from "/assets/icons/remove-circle-outline.svg";

const CartItem = ({ product }) => {
  const { removeFromCart, increase, decrease } = useContext(CartContext);

  return (
    <SingleCartItem>
      <CartImage src={product.image} alt={product.name} />
      <div>
        <h5>{product.name}</h5>
        <p>{formatCurrency(product.price)}</p>
      </div>

      {/* Buttons */}
      <BtnContainer>
        <button
          onClick={() => increase(product)}
          className="btn btn-primary btn-sm mr-2 mb-1"
        >
          <Icon src={Plus} alt="" />
        </button>

        <div>
          <p>Qty: {product.quantity}</p>
        </div>

        {/* Display a minus icon or trash/delete icon based on the quantity of a particular product is in the cart */}
        {product.quantity > 1 && (
          <button onClick={() => decrease(product)} className="btn">
            <Icon src={Minus} alt="" />
          </button>
        )}

        {product.quantity === 1 && (
          <button onClick={() => removeFromCart(product)} className="btn">
            <Icon src={TrashIcon} alt="" />
          </button>
        )}
      </BtnContainer>
    </SingleCartItem>
  );
};
