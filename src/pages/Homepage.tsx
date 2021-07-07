/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CountDownBanner } from "../components/CountDownBanner";
import Navigation from "../components/Navigation";
function Homepage() {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      Homepage
      <CountDownBanner />
      <Navigation />
    </div>
  );
}

export default Homepage;
