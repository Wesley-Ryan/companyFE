/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ColorBox, Checked } from "../styles/Styles";
import Arrow from "../assets/arrow.svg";

interface BoxProp {
  isPinkActive: boolean;
}

const PinkeColorBox = ({ isPinkActive }: BoxProp) => {
  return (
    <>
      <ColorBox
        css={css`
          background-color: #f6437d;
        `}
      >
        {isPinkActive && <Checked src={Arrow} alt="checked" />}
      </ColorBox>
    </>
  );
};

export default PinkeColorBox;
