/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Column, CardText, CardTitle, CardButton } from "../styles/Styles";

import Glasses from "../assets/glasses.jpg";
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
        position: relative;
      `}
    >
      <Column>
        <div>
          <img
            src={Glasses}
            css={css`
              height: 222px;
              width: 301px;
              border-top-left-radius: 12px;
              border-top-right-radius: 12px;
            `}
          />
        </div>
        <Column>
          <CardTitle>Lorem ipsum 1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardText>
        </Column>
        <CardButton>Add to cart</CardButton>
      </Column>
    </div>
  );
};

export default Card;
