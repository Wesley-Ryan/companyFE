import {
  Footer,
  FooterLogo,
  FooterColumn,
  FooterText,
  FooterTitle,
} from "../styles/Styles";
import Logo from "../assets/FooterLogo.svg";

const FooterComponent = () => {
  return (
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
  );
};

export default FooterComponent;
