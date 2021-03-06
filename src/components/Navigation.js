/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavContainer, NavItem, Row, NavLogo, NavMenu } from "../styles/Styles";
import CartImg from "../assets/cart.svg";

import MobileNav from "./MobileNav";
import { useStore } from "../hooks/useStore";
import Resize from "../hooks/useResize";
import { useHistory } from "react-router";
const Navigation = ({ setIsOpen }) => {
  const history = useHistory();
  const cart = useStore((state) => state.cart);
  Resize();
  return (
    <NavContainer>
      <NavLogo
        css={css`
          @media (max-width: 1003px) {
            font-size: 19px;
          }
          @media (max-width: 440px) {
            align-self: center;
            width: 100%;
            margin: 0 auto;
          }
        `}
      >
        Lorem Ipsum
      </NavLogo>
      {window.innerWidth < 760 ? (
        <MobileNav />
      ) : (
        <NavMenu
          css={css`
            @media (max-width: 768px) {
              width: 90%;
              justify-content:space-between;
          `}
        >
          <NavItem>LOREM</NavItem>
          <NavItem>IPSUM</NavItem>
          <NavItem>EXCEPTEUR</NavItem>
          <NavItem>CONSECTETUR</NavItem>
          <NavItem
            css={css`
              &:hover {
                text-decoration: underline;
              }
              @media (max-width: 862px) {
                width: 170px;
              }
            `}
            onClick={() => history.push("/login")}
          >
            COMPANY LOGIN
          </NavItem>
        </NavMenu>
      )}

      <Row onClick={() => setIsOpen((state) => !state)}>
        <img
          src={CartImg}
          alt="cart"
          css={css`
            height: 30px;
            width: 37px;
            align-self: center;
            margin-left: 100px;
            margin-right: -8px;

            @media (max-width: 770px) {
              align-self: center;
              margin-left: 0;
            }
          `}
        />
        {cart.length > 0 ? (
          <div
            className="oval"
            css={css`
              margin: 0;
              padding: 0;
            `}
          >
            <p
              css={css`
                margin: 0 auto;
                color: white;
                font-size: 16px;
              `}
            >
              {cart.length}
            </p>
          </div>
        ) : null}

        <Row
          css={css`
            height: 37px;
            align-self: center;
            margin: 0 5px 0 10px;
          `}
        >
          <p className="triangle"></p>
        </Row>
      </Row>
    </NavContainer>
  );
};

export default Navigation;
