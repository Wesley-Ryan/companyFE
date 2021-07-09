/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CardContainer } from "../styles/Styles";

function LoginForm() {
  return (
    <CardContainer
      css={css`
        margin: 0 auto;
        width: 350px;
        margin-top: 80px;
      `}
    ></CardContainer>
  );
}

export default LoginForm;
