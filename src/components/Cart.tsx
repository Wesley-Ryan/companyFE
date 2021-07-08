/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Row } from "../styles/Styles";
type Props = {};

const Cart: React.FC<Props> = ({ children }) => {
  return (
    <div
      css={css`
        margin-right: 67.5px;
        box-sizing: border-box;
        height: 299px;
        width: 317px;
        border: 1px solid #e6e6e7;
        border-radius: 0 0 10px 10px;
        background-color: #ffffff;
        box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.19);
        z-index: 99;
        position: fixed;
      `}
    >
      <Row>{children}</Row>
    </div>
  );
};

export default Cart;
