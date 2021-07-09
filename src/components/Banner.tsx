/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Column, TopButton } from "../styles/Styles";
import TopImg from "../assets/top-image.jpg";
const Banner = () => {
  return (
    <div
      className="background"
      css={css`
        height: 704px;
        width: 100%;
        display: flex;
        justify-content: space-between;
      `}
    >
      <Column
        css={css`
          width: 603px;
        `}
      >
        <h1
          css={css`
            margin: 48px 0 37px 73px;
            width: 603px;
            height: 356px;
            color: #ffffff;
            font-family: Poppins;
            font-size: 80px;
            font-weight: 600;
            letter-spacing: 0;
            line-height: 89px;
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <p
          css={css`
            width: 603px;
            margin: 0 0 38px 79px;
            height: 93px;
            color: #ffffff;
            font-family: "Open Sans";
            font-size: 16px;
            letter-spacing: 0;
            line-height: 31px;
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <TopButton>Lorem</TopButton>
      </Column>
      <Column
        css={css`
          margin: 95px 68px 93px;
          height: 639px;
          width: 603px;
          background: url(${TopImg}) center center no-repeat;
          border-radius: 12px;
          box-shadow: 0 4px 7px rgba(0, 0, 0, 0.5);
          
            }
        `}
      ></Column>
    </div>
  );
};

export default Banner;
