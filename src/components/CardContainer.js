import { Carousel } from "react-responsive-carousel";
import Card from "./Card";
import { Row } from "../styles/Styles";
import { useEffect, useState } from "react";

const CardContainer = (props) => {
  const [groupedProducts, setGroupedProducts] = useState([]);
  const { products } = props;

  let groupOfThree = (n, data) => {
    let result = [];
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
    return result;
  };

  useEffect(() => {
    const grouped = groupOfThree(3, products);
    setGroupedProducts(grouped);
  }, [products]);
  return (
    <>
      <Carousel showThumbs={false}>
        {groupedProducts.map((prod, index) => {
          return (
            <Row key={index}>
              {prod.map((eachProduct, idx) => {
                return <Card product={eachProduct} key={idx} />;
              })}
            </Row>
          );
        })}
      </Carousel>
      ;
    </>
  );
};

export default CardContainer;
