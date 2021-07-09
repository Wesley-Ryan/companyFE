/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import { useEffect } from "react";
import { calculateTimeLeft } from "../hooks/useTimer";
import {
  Row,
  Column,
  CountNumber,
  CountText,
  CountContainer,
  CounterTitleText,
} from "../styles/Styles";
import Close from "../assets/close.svg";

type Props = {
  setIsShowing: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

export const CountDownBanner: React.FC<Props> = ({ setIsShowing }) => {
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
    <CountContainer>
      <Row
        css={css`
          height: 44px;
          width: 671px;
          justify-content: space-between;
        `}
      >
        <CounterTitleText
          css={css`
            a @media (max-width: 740px) {
              display: none;
            }
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </CounterTitleText>

        <Row
          css={css`
            width: 211px;
            height: 44px;
            align-items: center;
            @media (max-width: 740px) {
              margin: 0 auto;
            }
          `}
        >
          <Column>
            <CountNumber>{end?.days}</CountNumber>
            <CountText>days</CountText>
          </Column>

          <Column>
            <CountNumber>{hours <= 9 ? `0${hours}` : hours}</CountNumber>
            <CountText>hours</CountText>
          </Column>
          <Column>
            <CountNumber>{minutes <= 9 ? `0${minutes}` : minutes}</CountNumber>
            <CountText>minutes</CountText>
          </Column>
          <Column>
            <CountNumber>{seconds <= 9 ? `0${seconds}` : seconds}</CountNumber>
            <CountText>seconds</CountText>
          </Column>
        </Row>

        <Column
          css={css`
            align-self: center;
            right: 0;
            position: absolute;
            margin-right: 31px;
            cursor: pointer;
          `}
          onClick={() => setIsShowing((state) => !state)}
        >
          <img src={Close} alt="close-btn" height="15px" />
        </Column>
      </Row>
    </CountContainer>
  );
};
