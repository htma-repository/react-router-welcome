import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Product from "./components/Product";
import NavigationMenu from "./components/Navigation/Navigation";
import ProductDetails from "./components/ProductDetails";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <header>
        <NavigationMenu />
      </header>
      <main>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/welcome/*"} element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome Page</p>} />
          </Route>
          <Route path={"/product"} element={<Product />} />
          <Route path={"/product/:productId"} element={<ProductDetails />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
