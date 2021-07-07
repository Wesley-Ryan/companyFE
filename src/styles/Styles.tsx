/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;
const GroupedCol = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export { Row, Column, GroupedCol };
