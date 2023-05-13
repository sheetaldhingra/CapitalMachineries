import React from "react";
import "../Style/memberLogin.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function MemberLogin() {
  const checkKey = (event) => {
    if (event.keyCode === 13) {
      login();
    }
  };
  const navigate = useNavigate();
  const login = () => {
    if ($("#memberName").val() === "") {
      $("#memberName").addClass("is-invalid");
    }
    if ($("#memberPass").val() === "") {
      $("#memberPass").addClass("is-invalid");
    } else {
      $("#memberName").removeClass("is-invalid");
      $("#memberPass").removeClass("is-invalid");

      if (
        $("#memberPass").val() === "Test1234" &&
        $("#memberName").val() === "KushSharma"
      ) {
        sessionStorage.setItem("IsLogin", true);
        navigate("/memberlogin/MemberPortal", {
          state: {
            IsLogin: true,
          },
        });
      } else if (
        $("#memberName").val() !== "KushSharma" &&
        $("#memberPass").val() !== "Test1234"
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "UserName and Password is in-valid",
        });
      } else if ($("#memberName").val() !== "KushSharma") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "UserName is in-valid",
        });
      } else if ($("#memberPass").val() !== "Test1234") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password is in-valid",
        });
      }
    }
  };
  return (
    <section
      className="vh-100 memberLogin"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/17973908.jpg"})`,
      }}
    >
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src={process.env.PUBLIC_URL + "/4957136.jpg"}
              className="img-fluid rounded"
              alt="logo"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="memberName"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="memberName">
                  <strong>Email address</strong>
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="memberPass"
                  onKeyUp={checkKey}
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="memberPass">
                  <strong>Password</strong>
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={login}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div className="text-white mb-3 mb-md-0">
      Copyright © 2023. All rights reserved.
    </div>
  </div> */}
    </section>
  );
}
