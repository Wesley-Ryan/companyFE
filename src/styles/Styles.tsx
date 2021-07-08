/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
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

export { Row, Column, CountText, CountNumber, NavItem, TopButton };
