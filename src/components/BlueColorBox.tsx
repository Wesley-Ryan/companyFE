/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ColorBox, Checked } from "../styles/Styles";
import Arrow from "../assets/arrow.svg";

interface BoxProp {
  isBlueActive: boolean;
}
const BlueColorBox = ({ isBlueActive }: BoxProp) => {
  return (
    <>
      <ColorBox
        css={css`
          background-color: #143061;
        `}
      >
        {isBlueActive && <Checked src={Arrow} alt="checked" />}
      </ColorBox>
    </>
  );
};
export default BlueColorBox;
