/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Column,
  TopButton,
  BannerContainer,
  BannerTitle,
  BannerText,
} from "../styles/Styles";
import TopImg from "../assets/top-image.jpg";
const Banner = () => {
  return (
    <BannerContainer
      className="background"
      css={css`
        @media (max-width: 820px) {
          align-self: center;
          justify-content: center;
        }
      `}
    >
      <Column
        css={css`
          width: 603px;
          @media (max-width: 720px) {
            width: 100%;
            padding: 8px;
          }
        `}
      >
        <BannerTitle
          css={css`
            width: 603px;
            @media (max-width: 720px) {
              width: 100%;
              font-size: 40px;
              line-height: 68px;
              align-self: center;
              margin-bottom: 0;
            }
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </BannerTitle>
        <BannerText
          css={css`
            @media (max-width: 720px) {
              width: 100%;
              margin: 3px;
              align-self: center;
            }
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </BannerText>
        <TopButton
          css={css`
            @media (max-width: 840px) {
              align-self: center;
              margin: 0 auto;
              margin-top: 50px;
            }
            @media (max-width: 440px) {
              align-self: center;
              margin: 0 auto;
              margin-top: 95px;
            }
          `}
        >
          Lorem
        </TopButton>
      </Column>
      <Column
        css={css`
          margin: 95px 68px 93px;
          height: 639px;
          width: 603px;
          background: url(${TopImg}) center center no-repeat;
          border-radius: 12px;
          box-shadow: 0 4px 7px rgba(0, 0, 0, 0.5);
          @media (max-width: 840px) {
            display:none;
          }
            }
        `}
      ></Column>
    </BannerContainer>
  );
};

export default Banner;
