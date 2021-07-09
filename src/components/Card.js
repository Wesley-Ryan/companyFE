/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Column,
  CardContainer,
  CardText,
  CardTitle,
  CardButton,
  Row,
} from "../styles/Styles";
import { useStore } from "../hooks/useStore";

import CardColorBox from "./CardColorBox";
const Card = (props) => {
  const {
    addToCart,
    toggleBlueActive,
    togglePurpleActive,
    togglePinkActive,
    isBlueActive,
    isPurpleActive,
    isPinkActive,
  } = useStore((state) => state);

  const { product } = props;

  return (
    <CardContainer>
      <Column>
        <div>
          <img
            src={product?.url}
            css={css`
              height: 222px;
              width: 301px;
              border-top-left-radius: 12px;
              border-top-right-radius: 12px;
            `}
            alt="product"
          />
        </div>
        <Column>
          <CardTitle>{product?.product_name}</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardText>
        </Column>
        <Row
          css={css`
            margin: 51px 159.5px 0 21.5px;
            justify-content: space-between;
          `}
        >
          <span onClick={() => toggleBlueActive(!isBlueActive)}>
            <CardColorBox isBlueActive={isBlueActive} color="#143061" />
          </span>

          <span onClick={() => togglePurpleActive(!isPurpleActive)}>
            <CardColorBox isPurpleActive={isPurpleActive} color="#81396f" />
          </span>

          <span onClick={() => togglePinkActive(!isPinkActive)}>
            <CardColorBox isPinkActive={isPinkActive} color="#f6437d" />
          </span>
        </Row>
        <p>ID: {product?.id}</p>
        <CardButton onClick={() => addToCart(product)}>Add to cart</CardButton>
      </Column>
    </CardContainer>
  );
};

export default Card;
