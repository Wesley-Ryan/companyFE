import { useEffect, useState } from "react";
import axiosWithAuth from "../util/axiosWithAuth";

function CompanyItems() {
  useEffect(() => {
    function getCompanyItems() {
      axiosWithAuth
        .get("/store/products/company/all")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    getCompanyItems();
  }, []);

  //can ping api
  return <div>Company Page</div>;
}

export default CompanyItems;
