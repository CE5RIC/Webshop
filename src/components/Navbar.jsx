// General
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "/assets/icons/cart.svg";
import styled from "styled-components";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  // Get Screen Size
  useEffect(() => {
    const changeWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  // Extract itemscount from CartContext
  const { cartItems } = useContext(CartContext);

  return (
    <Nav>
      <NavContainer>
        <Left>
          <Link to={"/"}>FASHION.</Link>
        </Left>

        <Right>
          <NavRightContainer
            style={{
              transform:
                innerWidth <= 500
                  ? toggle && "translateY(100vh)"
                  : "translateY(0%)",
            }}
          >
            <NavList>
              <NavItem>
                <NavLink to="/" onClick={() => setToggle(!toggle)}>
                  Store
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" onClick={() => setToggle(!toggle)}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <a href="https://twitter.com/israelmitolu" target="_blank">
                  Contact
                </a>
              </NavItem>
              <NavItem>
                <Link to="/cart" onClick={() => setToggle(!toggle)}>
                  <p>Cart</p>
                  <NavCartItem>
                    <img src={CartIcon} alt="Shopping cart" />
                    {/* If the number of cartItems is greater than 0, display the
                    number of items in the cart */}
                    {cartItems.length > 0 && (
                      <CartCircle>{cartItems.length}</CartCircle>
                    )}
                  </NavCartItem>
                </Link>
              </NavItem>
            </NavList>
          </NavRightContainer>

          <MenuBtn onClick={() => setToggle(!toggle)}>
            <span></span>
            <span></span>
            <span></span>
          </MenuBtn>
        </Right>
      </NavContainer>
    </Nav>
  );
};
