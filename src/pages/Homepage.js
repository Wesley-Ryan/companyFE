/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "../hooks/useStore";
import Resize from "../hooks/useResize";

import { CountDownBanner } from "../components/CountDownBanner";
import Navigation from "../components/Navigation.js";
import Cart from "../components/Cart.js";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";
import {
  Row,
  Footer,
  FooterLogo,
  FooterColumn,
  FooterText,
  FooterTitle,
} from "../styles/Styles";

import Logo from "../assets/FooterLogo.svg";

function Homepage() {
  const { setProducts, products } = useStore((state) => state);
  const [isShowing, setIsShowing] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [items] = useState([]);

  Resize();

  useEffect(() => {
    const getItems = () => {
      axios
        .get("https://ricoma.herokuapp.com/store/products/all")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    getItems();
  }, [setProducts]);

  return (
    <div
      css={css`
        width: 100%;
        overflow-x: hidden;
      `}
    >
      {window.innerWidth < 760
        ? null
        : isShowing && <CountDownBanner setIsShowing={setIsShowing} />}
      <Navigation items={items} setIsOpen={setIsOpen} />

      {isOpen && (
        <Row
          css={css`
            justify-content: flex-end;
          `}
        >
          <Cart />
        </Row>
      )}
      <Banner />
      <CardContainer products={products} />
      <Footer>
        <FooterLogo src={Logo} alt="footer-logo" />
        <FooterColumn>
          <FooterTitle>Lorem Ipsum</FooterTitle>
          <FooterText>Lorem Ipsum</FooterText>
          <FooterText>Lorem Ipsum</FooterText>
          <FooterText>Lorem Ipsum</FooterText>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Lorem Ipsum</FooterTitle>
          <FooterText>Lorem Ipsum</FooterText>
          <FooterText>Lorem Ipsum</FooterText>
          <FooterText>Lorem Ipsum</FooterText>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Lorem Ipsum</FooterTitle>
          <FooterText>Lorem Ipsum</FooterText>
          <FooterText>Lorem Ipsum</FooterText>
          <FooterText>Lorem Ipsum</FooterText>
        </FooterColumn>
      </Footer>
    </div>
  );
}

export default Homepage;
