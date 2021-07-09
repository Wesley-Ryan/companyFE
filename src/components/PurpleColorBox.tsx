/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ColorBox, Checked } from "../styles/Styles";
import Arrow from "../assets/arrow.svg";

interface BoxProp {
  isPurpleActive: boolean;
}

const PurpleColorBox = ({ isPurpleActive }: BoxProp) => {
  return (
    <>
      <ColorBox
        css={css`
          background-color: #81396f;
        `}
      >
        {isPurpleActive && <Checked src={Arrow} alt="checked" />}
      </ColorBox>
    </>
  );
};

export default PurpleColorBox;
