import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Product from "./components/Product";
import Navigation from "./components/Navigation/Navigation";
import ProductDetails from "./components/ProductDetails";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <header>
        <Navigation />
      </header>
      <main>
        <Route path={"/welcome"}>
          <Welcome />
        </Route>
        <Route path={"/product"}>
          <Product />
        </Route>
        <Route path={"/product/:productId"}>
          <ProductDetails />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
