/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Row, CartContainer } from "../styles/Styles";

import { useStore } from "../hooks/useStore";

const Cart = () => {
  const { cart } = useStore((state) => state);
  return (
    <CartContainer>
      {console.log("CART", cart)}
      <Row>item</Row>
    </CartContainer>
  );
};

export default Cart;
