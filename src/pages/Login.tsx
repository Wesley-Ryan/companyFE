/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  CardContainer,
  Input,
  SubmitButton,
  ErrorButton,
  ErrorMessage,
} from "../styles/Styles";
import CompanyLogo from "../assets/BnL.svg";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

type User = {
  Email: string;
  Password: string;
};

const LoginForm: React.FC = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const onSubmit = (data: User): void => {
    const credentials = {
      company_email: data.Email,
      company_password: data.Password,
    };
    axios
      .post("https://ricoma.herokuapp.com/accounts/login", credentials)
      .then((response) => {
        localStorage.setItem("BNL_Corp", response.data.token);
        history.push("/company/bnl");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <CardContainer
      css={css`
        margin: 0 auto;
        width: 350px;
        height: 440px;
        margin-top: 80px;
      `}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            align-self: center;
            margin: 20px;
          `}
        >
          <img
            src={CompanyLogo}
            alt="company-logo"
            height="150px"
            width="150px"
          />
        </div>

        <Input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors?.Email?.type === "pattern" && (
          <ErrorMessage>Email is required.</ErrorMessage>
        )}
        <Input
          type="password"
          placeholder="Password"
          {...register("Password", { required: true })}
        />
        {errors?.Password && (
          <ErrorMessage>Password cannot be blank.</ErrorMessage>
        )}
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            margin-top: 30px;
          `}
        >
          <SubmitButton
            type="submit"
            css={css`
              cursor: pointer;
            `}
          >
            Login
          </SubmitButton>
          <ErrorButton
            onClick={() => history.push("/")}
            css={css`
              cursor: pointer;
            `}
          >
            Cancel
          </ErrorButton>
        </div>
      </form>
    </CardContainer>
  );
};

export default LoginForm;
