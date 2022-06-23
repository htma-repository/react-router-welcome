import React from "react";
import { Link } from "react-router-dom";

import "../scss/product.scss";

const Product = () => {
  return (
    <section className="container">
      <h1 className="product">Product Page</h1>
      <ul className="product__links">
        <li className="product__link">
          <Link to={"/product/p1"}>Food</Link>
        </li>
        <li className="product__link">
          <Link to={"/product/p2"}>Cloth</Link>
        </li>
        <li className="product__link">
          <Link to={"/product/p3"}>Gadget</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
