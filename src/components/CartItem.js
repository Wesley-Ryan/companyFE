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
      <CartImg
        src={product.url}
        alt={product.product_name}
        css={css`
          height: 92px;
          width: 95px;
          border-radius: 8px;
          margin: 22px 5px 24px 0;
        `}
      />
      <Column
        css={css`
          align-items: center;
        `}
      >
        <CartProductText
          css={css`
            height: 33px;
            width: 165px;
            color: #000000;
            font-family: Poppins;
            font-size: 23px;
            font-weight: 600;
            letter-spacing: 0;
            line-height: 33px;
            margin: 23px 0 4px 0;
          `}
        >
          {product.product_name}
        </CartProductText>
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
