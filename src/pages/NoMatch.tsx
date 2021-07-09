/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ErrorButton } from "../styles/Styles";
import { useLocation, useHistory } from "react-router-dom";
import ErrorImage from "../assets/404.jpeg";

function NoMatch() {
  const location = useLocation();
  const history = useHistory();

  function handleBackClick() {
    history.push("/");
  }
  return (
    <div
      css={css`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <img src={ErrorImage} width="50%" alt="404 Bee" />
      <h3>{location.pathname}</h3>
      <ErrorButton onClick={handleBackClick}>Home</ErrorButton>
    </div>
  );
}

export default NoMatch;
