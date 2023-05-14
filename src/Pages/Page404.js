import React from "react";
import { Helmet } from "react-helmet";

export default function Page404() {
  return (
    <div className="container mt-5">
      <Helmet>
        <title>Page404</title>
        <meta name="description" content="Page404" />
      </Helmet>

      <div className="jumbotron">
        <div className="container text-center">
          <h1>No found</h1>
          <br />
          <img
            src={require("../Asserts/img/page404.png")}
            style={{ width: "45vw" }}
            alt="about"
          />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
