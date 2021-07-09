/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavContainer, NavItem, Row, NavLogo, NavMenu } from "../styles/Styles";
import Menu from "../assets/menu.svg";
import { useHistory } from "react-router";
import { useState } from "react";
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  return (
    <div
      css={css`
        flex-direction: column;
      `}
    >
      <div
        css={css`
          cursor: pointer;
        `}
        onClick={() => setIsOpen((state) => !state)}
      >
        <img src={Menu} height="80px" />
      </div>
      {isOpen && (
        <div
          css={css`
            width: 100%;
            left: 0;
            background-color: #ffffff;
            z-index: 99;
            position: absolute;
            margin-top: -20px;
            height: 160px;
          `}
        >
          <NavItem>LOREM</NavItem>
          <NavItem>IPSUM</NavItem>
          <NavItem>EXCEPTEUR</NavItem>
          <NavItem>CONSECTETUR</NavItem>
          <NavItem onClick={() => history.push("/login")}>
            COMPANY LOGIN
          </NavItem>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
