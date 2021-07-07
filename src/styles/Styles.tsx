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

export { Row, Column, CountText, CountNumber, NavItem };
