/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import { useEffect } from "react";
import { calculateTimeLeft } from "../hooks/useTimer";
import { Row, Column, CountNumber, CountText } from "../styles/Styles";

export const CountDownBanner = () => {
  const [seconds, setSeconds] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [hours, setHours] = React.useState<number>(0);
  const end = calculateTimeLeft();

  useEffect(() => {
    const deadline = calculateTimeLeft();
    if (seconds >= 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(deadline?.seconds || 0);
      setMinutes(deadline?.minutes || 0);
      setHours(deadline?.hours || 0);
    }
  }, [seconds]);
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
            <CountNumber>{end?.days}</CountNumber>
            <CountText>days</CountText>
          </Column>

          <Column>
            <CountNumber>{hours}</CountNumber>
            <CountText>hours</CountText>
          </Column>
          <Column>
            <CountNumber>{minutes}</CountNumber>
            <CountText>minutes</CountText>
          </Column>
          <Column>
            <CountNumber>{seconds}</CountNumber>
            <CountText>seconds</CountText>
          </Column>
        </Row>
      </Row>
    </div>
  );
};
