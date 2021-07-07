/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { calculateTimeLeft } from "../hooks/useTimer";
import { Column } from "../styles/Styles";

export const CountDownBanner = () => {
  const deadline = calculateTimeLeft();

  return (
    <div
      css={css`
        width: 100%;
        height: 44px;
        border: 1px solid blue;
        display: flex;
      `}
    >
      <Column>
        <p
          css={css`
            color: #ffffff;
            font-family: Poppins;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1px;
            text-align: center;
            margin: 0;
          `}
        >
          {deadline?.days}
        </p>
        <p
          css={css`
            color: rgba(255, 255, 255, 0.72);
            font-family: Poppins;
            font-size: 12px;
            letter-spacing: 0;
            text-align: center;
            margin: 0;
          `}
        >
          days
        </p>
      </Column>

      <Column>
        <p>{deadline?.hours}</p>
        <p>hours</p>
      </Column>
      <Column>
        <p>{deadline?.minutes}</p>
        <p>minutes</p>
      </Column>
      <Column>
        <p>{deadline?.seconds}</p>
        <p>seconds</p>
      </Column>
    </div>
  );
};
