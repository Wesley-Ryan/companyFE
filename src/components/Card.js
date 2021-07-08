/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Column, TopButton } from "../styles/Styles";

const Card = (props) => {
  return (
    <div
      css={css`
        margin: 101px 0 0 73px;
        box-sizing: border-box;
        height: 567px;
        width: 302px;
        border: 1px solid #ececec;
        border-radius: 12px;
        background-color: #ffffff;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.13);
      `}
    >
      <Column>title image button</Column>
    </div>
  );
};

export default Card;
