/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Row } from "../styles/Styles";

import { CountDownBanner } from "../components/CountDownBanner";
import Navigation from "../components/Navigation.js";
import Cart from "../components/Cart";
import Banner from "../components/Banner";

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
      <Navigation items={items} />

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
      <button onClick={() => setIsOpen((state) => !state)}>CLick</button>
    </div>
  );
}

export default Homepage;
