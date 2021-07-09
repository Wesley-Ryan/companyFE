/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {
  Column,
  ColorBox,
  CartItemContainer,
  CartImg,
  CartProductText,
  CartLink,
  Checked,
} from "../styles/Styles";

import { useStore } from "../hooks/useStore";
import BlueColorBox from "./BlueColorBox";
import PurpleColorBox from "./PurpleColorBox";
import PinkColorBox from "./PinkColorBox";

const CartItem = (props) => {
  const { product, removeFromCart } = props;
  const { togglePinkActive, isBlueActive, isPurpleActive, isPinkActive } =
    useStore((state) => state);
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
          <BlueColorBox isBlueActive={isBlueActive} />
          <PurpleColorBox isPurpleActive={isPurpleActive} />
          <PinkColorBox isPinkActive={isPinkActive} />
        </div>
        <CartLink onClick={() => removeFromCart(product)}>REMOVE</CartLink>
      </Column>
    </CartItemContainer>
  );
};
export default CartItem;
