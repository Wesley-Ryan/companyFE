/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Carousel } from "react-responsive-carousel";
import Card from "./Card";
import { CarouselRow } from "../styles/Styles";
import { useEffect, useState } from "react";
import Resize from "../hooks/useResize";

const CardContainer = (props) => {
  const [groupedProducts, setGroupedProducts] = useState([]);
  const { products } = props;

  let groupOfThree = (n, data) => {
    let result = [];
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
    return result;
  };
  Resize();

  useEffect(() => {
    if (window.innerWidth < 840) {
      const grouped = groupOfThree(2, products);
      setGroupedProducts(grouped);
    } else {
      const grouped = groupOfThree(4, products);
      setGroupedProducts(grouped);
    }
  }, [products]);

  return (
    <>
      <Carousel showThumbs={false} autoPlay={true}>
        {groupedProducts.map((prod, index) => {
          return (
            <CarouselRow
              key={index}
              css={css`
                @media (max-width: 760px) {
                  flex-direction: column;
                  align-items: center;
                }
              `}
            >
              {prod.map((eachProduct, idx) => {
                return <Card product={eachProduct} key={idx} />;
              })}
            </CarouselRow>
          );
        })}
      </Carousel>
    </>
  );
};

export default CardContainer;
