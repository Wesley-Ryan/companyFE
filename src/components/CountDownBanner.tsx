/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState } from "react";
import { calculateTimeLeft } from "../hooks/useTimer";
import { Row, Column, CountNumber, CountText } from "../styles/Styles";

export const CountDownBanner = () => {
  const deadline = calculateTimeLeft();

  return (
    <div
      css={css`
        width: 100%;
        height: 50px;
        background-color: #1f3162;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Row
        css={css`
          height: 44px;
          width: 671px;
          justify-content: space-between;
        `}
      >
        <p
          css={css`
            align-self: center;
            height: 31px;
            color: rgba(255, 255, 255, 0.72);
            font-family: Poppins;
            font-size: 16px;
            letter-spacing: 0;
            line-height: 31px;
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <Row
          css={css`
            width: 211px;
            height: 44px;
            align-items: center;
          `}
        >
          <Column>
            <CountNumber>{deadline?.days}</CountNumber>
            <CountText>days</CountText>
          </Column>

          <Column>
            <CountNumber>{deadline?.hours}</CountNumber>
            <CountText>hours</CountText>
          </Column>
          <Column>
            <CountNumber>{deadline?.minutes}</CountNumber>
            <CountText>minutes</CountText>
          </Column>
          <Column>
            <CountNumber>{deadline?.seconds}</CountNumber>
            <CountText>seconds</CountText>
          </Column>
        </Row>
      </Row>
    </div>
  );
};
