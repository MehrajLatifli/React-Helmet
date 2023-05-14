import React from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  const LogOutHandle = () => {
    window.localStorage.removeItem("User");

    navigate("/", location?.state?.return_url);
  };

  return (
    <div>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Profile" />
      </Helmet>
      <br />
      Profile
      <br />
      <br />
      <img
        src={require("../Asserts/img/cat-4.jpg")}
        className="rounded-responsive rounded-circle margin"
        style={{ display: "inline" }}
        alt="about"
      />
      <br />
      <br />
      <button type="button" class="btn btn-danger" onClick={LogOutHandle}>
        LogOut
      </button>
    </div>
  );
}
