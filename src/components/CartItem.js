/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Column,
  CardColorBox,
  CartItemContainer,
  CartImg,
  CartProductText,
  CartLink,
} from "../styles/Styles";
const CartItem = (props) => {
  const colors = ["#143061", "#81396f", "#F6437D"];
  const { product, removeFromCart } = props;
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
          <CardColorBox
            css={css`
              background-color: ${colors[0]};
            `}
          ></CardColorBox>

          <CardColorBox
            css={css`
              background-color: ${colors[1]};
            `}
          ></CardColorBox>
          <CardColorBox
            css={css`
              background-color: ${colors[2]};
            `}
          ></CardColorBox>
        </div>

        <CartLink onClick={() => removeFromCart(product)}>REMOVE</CartLink>
      </Column>
    </CartItemContainer>
  );
};
export default CartItem;
