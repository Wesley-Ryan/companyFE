/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const CarouselRow = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Input = styled.input`
  height: 30px;
  font-size: 16px;
  width: 65%;
  margin: 0 auto;
  margin-top: 15px;
`;
const ErrorMessage = styled.p`
  align-self: center;
  font-family: Poppins;
  margin: 0 auto;
  color: rgb(207, 16, 32);
`;
const SubmitButton = styled.button`
  min-width: 140px;
  padding: 10px;
  background-color: #000000;
  font-family: Poppins;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  border: none;
  margin-top: 8px;
`;
const ErrorButton = styled.button`
  min-width: 140px;
  font-family: Poppins;
  padding: 10px;
  background-color: #ff0000;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  border: none;
  margin-top: 8px;
`;

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const BannerContainer = styled.div`
  height: 704px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BannerTitle = styled.p`
  margin: 48px 0 37px 73px;
  width: 603px;
  height: 356px;
  color: #ffffff;
  font-family: Poppins;
  font-size: 80px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 89px;
`;

const BannerText = styled.p`
  width: 603px;
  margin: 0 0 38px 79px;
  height: 93px;
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 16px;
  letter-spacing: 0;
  line-height: 31px;
`;
const CountText = styled.p`
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 12px;
  letter-spacing: 0;
  text-align: center;
  margin: 0 3px 0 3px;
`;

const CountNumber = styled.p`
  color: #ffffff;
  font-family: Poppins;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  margin: 0;
`;
const NavContainer = styled.div`
  width: 100%;
  height: 66px;
  background-color: #ffffff;
  font-family: Poppins;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e6e6e7;
`;

const NavLogo = styled.h2`
  height: 41px;
  width: 159px;
  color: #000000;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 41px;
  align-self: center;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 65%;
  align-items: center;
`;
const NavItem = styled.li`
  height: 31px;
  color: #000000;
  font-family: Poppins;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 31px;
  text-align: center;
  list-style-type: none;
  cursor: pointer;
`;

const TopButton = styled.button`
  height: 48px;
  width: 255px;
  border-radius: 24px;
  background-color: #000000;
  color: white;
  font-size: 15px;
  font-family: Poppins;
  font-weight: bold;
  border: none;
  margin-left: 79px;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.5);
`;

const CardContainer = styled.div`
  margin-top: 101px;
  box-sizing: border-box;
  height: 567px;
  width: 302px;
  border: 1px solid #ececec;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.13);
  position: relative;
`;
const CardTitle = styled.p`
  height: 33px;
  width: 165px;
  color: #000000;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 33px;
  margin: 22px 115px 0 21.5px;
`;
const CardText = styled.p`
  margin: 7px 25px 0px 21px;
  height: 56px;
  width: 255px;
  color: #000000;
  font-family: "Open Sans";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
`;

const CardButton = styled.button`
  height: 16px;
  width: 123px;
  color: #ffffff;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;
  text-align: center;
  height: 69px;
  width: 301px;
  border-radius: 0 0 12px 12px;
  background-color: #000000;
  border: none;
  outline: none;
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;

const ColorBox = styled.div`
  height: 32px;
  width: 33px;
  border-radius: 5px;
  cursor: pointer;
`;

const Checked = styled.img`
  height: 20px;
  margin: 4px;
`;

const CartContainer = styled.div`
  margin-right: 67.5px;
  box-sizing: border-box;
  height: 299px;
  width: 317px;
  border: 1px solid #e6e6e7;
  border-radius: 0 0 10px 10px;
  background-color: #ffffff;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.19);
  z-index: 99;
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
`;
const CartItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
  margin: 0 20px 0 20px;
`;

const CartImg = styled.img`
  height: 92px;
  width: 95px;
  border-radius: 8px;
  margin: 22px 5px 24px 0;
`;
const CartProductText = styled.p`
  height: 33px;
  width: 165px;
  color: #000000;
  font-family: Poppins;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 33px;
  margin: 23px 0 4px 0;
`;
const CartLink = styled.button`
  outline: none;
  border: none;
  text-decoration: underline;
  height: 24px;
  width: 60px;
  color: #646a70;
  font-family: "Open Sans";
  font-size: 13px;
  letter-spacing: 0;
  line-height: 24px;
  background: none;
  cursor: pointer;
`;

const Footer = styled.footer`
  height: 244px;
  width: 1440px;
  background-color: #000000;
  margin-top: 78px;
  padding: 2%;
  display: flex;
`;

const FooterLogo = styled.img`
  height: 146px;
  width: 146px;
  margin: 39px 142px 59px 114px;
`;

const FooterColumn = styled.div`
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 48px 70px 64px 0;
`;

const FooterTitle = styled.h3`
  color: #f6437d;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 41px;
  margin: 0;
  padding: 0;
`;
const FooterText = styled.p`
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 31px;
  margin: 0;
`;
const ProdContainer = styled.ul`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  margin: 0 auto;
  padding: 0;
`;

const ProdItem = styled.li`
  list-style-type: none;
  width: 15%;
  margin: 5px;
  text-align: center;
`;

export {
  Input,
  ErrorMessage,
  SubmitButton,
  ErrorButton,
  Row,
  Column,
  BannerContainer,
  BannerTitle,
  BannerText,
  CountText,
  CountNumber,
  NavContainer,
  NavMenu,
  NavLogo,
  NavItem,
  TopButton,
  CardContainer,
  CardText,
  CardTitle,
  CardButton,
  ColorBox,
  Checked,
  CarouselRow,
  CartContainer,
  CartProductText,
  CartItemContainer,
  CartImg,
  CartLink,
  Footer,
  FooterLogo,
  FooterColumn,
  FooterTitle,
  FooterText,
  ProdContainer,
  ProdItem,
};
