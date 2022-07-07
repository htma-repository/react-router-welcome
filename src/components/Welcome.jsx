import React from "react";
import { Link, Outlet } from "react-router-dom";

import "../scss/welcome.scss";

const Welcome = () => {
  return (
    <section>
      <h1 className="welcome">Welcome Page</h1>
      <Link
        to={"new-user"}
        style={{
          backgroundColor: "blue",
          padding: ".75rem 1.5rem",
          margin: "2rem auto",
          display: "inline-block",
          borderRadius: ".5rem",
        }}
      >
        Open
      </Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
