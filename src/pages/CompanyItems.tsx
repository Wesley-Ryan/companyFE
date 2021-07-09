/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axiosWithAuth from "../util/axiosWithAuth";
import { ProdItem, ProdContainer, ErrorButton } from "../styles/Styles";

type Prod = {
  id: number;
  url: string;
  product_name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  company: number;
};

const CompanyItems: React.FC = () => {
  const [items, setItems] = useState<Prod[]>([]);
  const history = useHistory();
  function logout() {
    localStorage.removeItem("BNL_Corp");
    history.push("/");
  }
  useEffect(() => {
    function getCompanyItems() {
      axiosWithAuth
        .get("/store/products/company/all")
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    getCompanyItems();
  }, []);

  return (
    <div
      css={css`
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 5px 0 5px;
      `}
    >
      <h1>Company Page</h1>

      <p>Your listed Items</p>
      <ProdContainer>
        <ProdItem>ID</ProdItem>
        <ProdItem>NAME</ProdItem>
        <ProdItem>SIZE</ProdItem>
        <ProdItem>PRICE</ProdItem>
        <ProdItem>QUANTITY</ProdItem>
      </ProdContainer>
      {items?.map((item) => {
        return (
          <>
            <ProdContainer key={item.id}>
              <ProdItem>{item.id}</ProdItem>
              <ProdItem>{item.product_name}</ProdItem>
              <ProdItem>{item.size}</ProdItem>
              <ProdItem>{item.price}</ProdItem>
              <ProdItem>{item.quantity}</ProdItem>
            </ProdContainer>
          </>
        );
      })}

      <ErrorButton
        css={css`
          margin-top: 30px;
        `}
        onClick={() => logout()}
      >
        Logout
      </ErrorButton>
    </div>
  );
};

export default CompanyItems;
