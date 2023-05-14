import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="container mt-5">
      <Helmet>
        <title>About</title>
        <meta name="description" content="About" />
      </Helmet>

      <div className="jumbotron">
        <div className="container text-center">
          <h1>My Portfolio</h1>
          <img
            src={require("../Asserts/img/about.jpg")}
            className="rounded-responsive rounded-circle margin"
            style={{ display: "inline" }}
            alt="about"
          />
          <br />
          <br />
          <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut
            cum laborum ex doloremque tempora commodi voluptates dolorem
            distinctio excepturi recusandae minima, molestias dolores quidem
            omnis consequatur repellendus reiciendis necessitatibus.
          </p>
          <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut
            cum laborum ex doloremque tempora commodi voluptates dolorem
            distinctio excepturi recusandae minima, molestias dolores quidem
            omnis consequatur repellendus reiciendis necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
}
