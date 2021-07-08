/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Column,
  CardContainer,
  CardText,
  CardTitle,
  CardButton,
  CardColorBox,
  Row,
  Checked,
} from "../styles/Styles";
import Arrow from "../assets/arrow.svg";

import { useState } from "react";
import { useStore } from "../hooks/useStore";

const Card = (props) => {
  const { addToCart } = useStore((state) => state);
  const { product } = props;

  const colors = ["#143061", "#81396f", "#F6437D"];
  const [inCart, setInCart] = useState(false);

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
          <CardColorBox
            css={css`
              background-color: ${colors[0]};
            `}
          >
            {inCart && <Checked src={Arrow} alt="checked" />}
          </CardColorBox>

          <CardColorBox
            css={css`
              background-color: ${colors[1]};
            `}
          >
            {inCart && <Checked src={Arrow} alt="checked" />}{" "}
          </CardColorBox>
          <CardColorBox
            css={css`
              background-color: ${colors[2]};
            `}
          >
            {inCart && <Checked src={Arrow} alt="checked" />}
          </CardColorBox>
        </Row>
        <p>ID: {product?.id}</p>
        <CardButton onClick={() => addToCart(product)}>Add to cart</CardButton>
      </Column>
    </CardContainer>
  );
};

export default Card;
