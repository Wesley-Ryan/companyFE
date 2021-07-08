/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Row } from "../styles/Styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CountDownBanner } from "../components/CountDownBanner";
import Navigation from "../components/Navigation.js";
import Cart from "../components/Cart";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card.js";

function Homepage() {
  const [isOpen, setIsOpen] = useState(true);
  const [items, setItems] = useState([]);

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <CountDownBanner />
      <Navigation items={items} setIsOpen={setIsOpen} />

      {isOpen && (
        <Row
          css={css`
            justify-content: flex-end;
          `}
        >
          <Cart />
        </Row>
      )}
      <Banner />
      <CardContainer />
    </div>
  );
}

export default Homepage;
