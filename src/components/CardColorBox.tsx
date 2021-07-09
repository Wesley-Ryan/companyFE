/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ColorBox, Checked } from "../styles/Styles";
import Arrow from "../assets/arrow.svg";
import { useState } from "react";

interface ColorProps {
  isOneActive: boolean;
  isTwoActive: boolean;
  isThreeActive: boolean;
}
const CardColorBox = ({
  isOneActive,
  isTwoActive,
  isThreeActive,
}: ColorProps) => {
  return (
    <>
      <ColorBox
        css={css`
          background-color: #143061;
        `}
      >
        {isOneActive && <Checked src={Arrow} alt="checked" />}
      </ColorBox>
      <ColorBox
        css={css`
          background-color: #81396f;
        `}
      >
        {isTwoActive && <Checked src={Arrow} alt="checked" />}
      </ColorBox>
      <ColorBox
        css={css`
          background-color: #f6437d;
        `}
      >
        {isThreeActive && <Checked src={Arrow} alt="checked" />}
      </ColorBox>
    </>
  );
};
export default CardColorBox;
