/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ColorBox, Checked } from "../styles/Styles";
import Arrow from "../assets/arrow.svg";

interface ColorProps {
  isBlueActive: boolean;
  isPurpleActive: boolean;
  isPinkActive: boolean;
  color: string;
}
const CardColorBox = ({
  color,
  isBlueActive,
  isPurpleActive,
  isPinkActive,
}: ColorProps) => {
  return (
    <>
      <ColorBox
        css={css`
          background-color: ${color};
        `}
      >
        {isBlueActive && <Checked src={Arrow} alt="checked" />}
        {isPinkActive && <Checked src={Arrow} alt="checked" />}
        {isPurpleActive && <Checked src={Arrow} alt="checked" />}
        {console.log(isBlueActive)}
      </ColorBox>
    </>
  );
};
export default CardColorBox;
