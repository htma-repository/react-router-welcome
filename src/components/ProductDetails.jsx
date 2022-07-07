import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

import "../scss/product-details.scss";

const ProductDetails = () => {
  const { productId } = useParams();
  return (
    <Fragment>
      <h1 className="product-details">ProductDetails</h1>
      <span>{productId}</span>
    </Fragment>
  );
};

export default ProductDetails;
