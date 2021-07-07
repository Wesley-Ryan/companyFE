/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CountDownBanner } from "../components/CountDownBanner";

function Homepage() {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      Homepage
      <CountDownBanner />
    </div>
  );
}

export default Homepage;
