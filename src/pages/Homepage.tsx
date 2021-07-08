/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Row } from "../styles/Styles";
import { CountDownBanner } from "../components/CountDownBanner";
import Navigation from "../components/Navigation";
import Cart from "../components/Cart";
function Homepage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <CountDownBanner />
      <Navigation />
      {isOpen && (
        <Row
          css={css`
            justify-content: flex-end;
          `}
        >
          <Cart />
        </Row>
      )}
    </div>
  );
}

export default Homepage;
