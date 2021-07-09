/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {
  Column,
  CartItemContainer,
  CartImg,
  CartProductText,
  CartLink,
} from "../styles/Styles";

import CardColorBox from "./CardColorBox";
import { useStore } from "../hooks/useStore";

const CartItem = (props) => {
  const { product, removeFromCart } = props;
  const { isBlueActive, isPurpleActive, isPinkActive } = useStore(
    (state) => state
  );
  return (
    <CartItemContainer>
      <CartImg src={product.url} alt={product.product_name} />
      <Column
        css={css`
          align-items: center;
        `}
      >
        <CartProductText>{product.product_name}</CartProductText>
        <div
          css={css`
            display: flex;
            width: 120px;
            justify-content: space-around;
          `}
        >
          <CardColorBox isBlueActive={isBlueActive} color="#143061" />
          <CardColorBox isPurpleActive={isPurpleActive} color="#81396f" />
          <CardColorBox isPinkActive={isPinkActive} color="#f6437d" />
        </div>
        <CartLink onClick={() => removeFromCart(product)}>REMOVE</CartLink>
      </Column>
    </CartItemContainer>
  );
};
export default CartItem;
