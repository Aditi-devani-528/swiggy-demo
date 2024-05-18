import React from "react";
import "../Navbar-Footer/navbar.css";
import Logo from "../img/asset 44.svg";
import N1 from "../img/asset 50.svg";
import N2 from "../img/asset 49.svg";
import N3 from "../img/asset 48.svg";
import N4 from "../img/asset 47.svg";
import N5 from "../img/asset 46.svg";
function MainNavbar() {
  return (
    <div className="navbarMain">
      <div className="mainNavbar d-flex justify-content-between align-items-center ">
        <div className="logo d-flex align-items-center">
          <img src={Logo} alt="" />
          <div className=" d-flex">
            <p className="position-relative ms-4">
              <span className="navbar-color fw-bold" style={{fontSize:"14px"}}>Other</span>
              <span className="line"></span>
            </p>
            <p className="ms-4">
              <i
                class="fa-solid fa-chevron-down"
                style={{ color: "#fc8019" }}
              ></i>
            </p>
          </div>
        </div>
        <div className="menu">
          <ul className="d-flex ">
            <li>
              <a href="#" className="text-black d-flex">
                <img
                  src={N1}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
                <p className="navbar-color fw-medium ms-3">Swiggy Corporate</p>
              </a>
            </li>
            <li>
              <a href="#" className="text-black d-flex">
                <img
                  src={N2}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
                <p className="navbar-color fw-medium ms-3">Search</p>
              </a>
            </li>
            <li>
              <a href="#" className="text-black d-flex">
                <img
                  src={N3}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
                <p className="navbar-color fw-medium ms-3">Offers</p>
              </a>
            </li>
            <li>
              <a href="#" className="text-black d-flex">
                <img
                  src={N4}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
                <p className="navbar-color fw-medium ms-3">Help</p>
              </a>
            </li>
            <li>
              <a href="#" className="text-black d-flex">
                <img
                  src={N5}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
                <p className="navbar-color fw-medium ms-3">Sign in</p>
              </a>
            </li>
            <li>
              <a href="" className="text-black d-flex">
                <p className="navbar-color fw-medium ms-3">cart</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
