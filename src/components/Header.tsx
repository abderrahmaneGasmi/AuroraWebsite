import React from "react";
import "../styles/components/header.css";
import Svg from "../assets/Svg";
import { search } from "../Constants/svgs";

export default function Header() {
  return (
    <section className="header">
      <div className="logoname">
        ARG <span>Games</span>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <Svg path={search} classlist="search__icon" view="0 0 32 32" />
      </div>
      <div className="buttons">
        <div
          className="buttons__btn"
          style={{ backgroundColor: "var(--primary-dark)", color: "white" }}
        >
          Login
        </div>
        <div
          className="buttons__btn"
          style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--primary-dark)",
          }}
        >
          Signup
        </div>
      </div>
    </section>
  );
}
