/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import { NavItem, Row } from "../styles/Styles";

import CartImg from "../assets/cart.svg";

import Cart from "../components/Cart";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div
      css={css`
        width: 100%;
        height: 116px;
        background-color: #ffffff;
        font-family: Poppins;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #e6e6e7;
      `}
    >
      <h2
        css={css`
          height: 41px;
          width: 159px;
          color: #000000;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0;
          line-height: 41px;
          align-self: center;
        `}
      >
        Lorem Ipsum
      </h2>
      <ul
        css={css`
          display: flex;
          justify-content: space-around;
          width: 65%;
          align-items: center;
        `}
      >
        <NavItem>LOREM</NavItem>
        <NavItem>IPSUM</NavItem>
        <NavItem>EXCEPTEUR</NavItem>
        <NavItem>CONSECTETUR</NavItem>
        <NavItem>VENIAM</NavItem>
      </ul>
      <Row onClick={() => setIsOpen((state) => !state)}>
        <img
          src={CartImg}
          alt="cart"
          css={css`
            height: 37px;
            align-self: center;
            margin-left: 100px;
          `}
        />
        <Row
          css={css`
            height: 37px;
            align-self: center;
            margin-left: 5px;
          `}
        >
          <p className="triangle"></p>
        </Row>
      </Row>
      {isOpen && <Cart />}
    </div>
  );
};

export default Navigation;
