import CartItem from "../components/CartItem";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";

const Cart = () => {
  // Extract the functions from the Context
  const { cartItems, checkout, clearCart } = useContext(CartContext);

  return (
    <>
      <Heading>
        <h1>
          Shopping Cart
          <span>({cartItems.length})</span>
        </h1>
      </Heading>

      {/* Show the checkout message when the Checkout Button has been clicked */}
      {checkout && (
        <CheckoutMsg>
          <h4>Thank you for your purchase!</h4>
          <p>
            Your order has been placed and will be delivered to you within 24
            hours.
          </p>
          <Link to="/">
            <ShopBtn onClick={clearCart}>Continue Shopping</ShopBtn>
          </Link>
        </CheckoutMsg>
      )}

      <Layout>
        <div>
          {
            <CartItemWrapper>
              {/* If cart is empty, display message, and if not, display each cart
            Item in cart: {cartItems.length} */}
              {cartItems.length === 0 ? (
                <h4 style={{}}>Cart is empty</h4>
              ) : (
                <ul>
                  {cartItems.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </ul>
              )}
            </CartItemWrapper>
          }
        </div>

        <div>
          {/* Checkout component  */}
          {cartItems.length > 0 && <Checkout />}
        </div>
      </Layout>
    </>
  );
};
