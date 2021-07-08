/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  CartContainer,
  CardColorBox,
  CartProductText,
  CartImg,
  CartLink,
  CartRow,
  CartColumn,
} from "../styles/Styles";

import { useStore } from "../hooks/useStore";

const Cart = () => {
  const colors = ["#143061", "#81396f", "#F6437D"];
  const { cart } = useStore((state) => state);
  return (
    <CartContainer>
      {cart.length >= 1
        ? cart.map((product) => {
            return (
              <div
                css={css`
                  display: flex;
                  border: 1px solid red;
                `}
              >
                <img
                  src={product.url}
                  alt={product.product_name}
                  height="90px"
                  width="90px;"
                />
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  `}
                >
                  <p
                    css={css`
                      margin: 0;
                    `}
                  >
                    {product.product_name}
                  </p>
                  <div
                    css={css`
                      display: flex;
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

                  <span>Remove</span>
                </div>
              </div>
            );
          })
        : null}
    </CartContainer>
  );
};

export default Cart;
