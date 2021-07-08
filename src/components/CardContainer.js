import { Carousel } from "react-responsive-carousel";
import Card from "./Card";
import { Row } from "../styles/Styles";
const CardContainer = ({ children }) => {
  return (
    <>
      <Carousel>
        <Row>
          <Card />
          <Card />
          <Card />
        </Row>
        <Row>
          <Card />
          <Card />
          <Card />
        </Row>
      </Carousel>
      ;
    </>
  );
};

export default CardContainer;
