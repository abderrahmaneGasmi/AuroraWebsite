import React from "react";
import "../styles/components/header.css";
import Svg from "../assets/Svg";
import { logout, search } from "../Constants/svgs";

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
      {/* <div className="buttons">
        <div
          className="buttons__btn"
          style={{ backgroundColor: "var(--logo)", color: "white" }}
        >
          Login
        </div>
        <div
          className="buttons__btn"
          style={{
            backgroundColor: "var(--sider)",
            color: "var(--lightgray)",
          }}
        >
          Signup
        </div>
      </div> */}
      <div className="user__nav">
        <div className="user__nav__info">
          <img src="/spiderman.jpg" alt="" className="user__nav__info__image" />
          <div className="user__nav__info__extra">
            <div className="user__nav__info__extra__name">Spiderman</div>
            <div className="user__nav__info__extra__level">
              <div className="user__nav__info__extra__level__icon">L</div>
              <div className="user__nav__info__extra__level__text">Level 1</div>
            </div>
          </div>
        </div>
        <Svg path={logout} classlist="user__nav__icon" view="0 0 20 20" />
      </div>
    </section>
  );
}
