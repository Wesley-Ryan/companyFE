/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Row } from "../styles/Styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "../hooks/useStore";

import { CountDownBanner } from "../components/CountDownBanner";
import Navigation from "../components/Navigation.js";
import Cart from "../components/Cart";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";

function Homepage() {
  const { setProducts, products } = useStore((state) => state);
  const [isOpen, setIsOpen] = useState(true);
  const [items, setItems] = useState([]);

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
  useEffect(() => {
    getItems();
  }, []);
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <CountDownBanner />
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
    </div>
  );
}

export default Homepage;
