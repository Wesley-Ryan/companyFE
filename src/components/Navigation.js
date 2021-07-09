/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavContainer, NavItem, Row, NavLogo, NavMenu } from "../styles/Styles";
import CartImg from "../assets/cart.svg";

import { useStore } from "../hooks/useStore";
import { useHistory } from "react-router";
const Navigation = ({ setIsOpen }) => {
  const history = useHistory();
  const cart = useStore((state) => state.cart);
  return (
    <NavContainer>
      <NavLogo>Lorem Ipsum</NavLogo>

      <NavMenu>
        <NavItem>LOREM</NavItem>
        <NavItem>IPSUM</NavItem>
        <NavItem>EXCEPTEUR</NavItem>
        <NavItem>CONSECTETUR</NavItem>
        <NavItem
          css={css`
            &:hover {
              text-decoration: underline;
            }
          `}
          onClick={() => history.push("/login")}
        >
          COMPANY LOGIN
        </NavItem>
      </NavMenu>

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
