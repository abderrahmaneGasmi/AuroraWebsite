import React from "react";
import "../styles/components/navbar.css";
import Svg from "../assets/Svg";
import { bookmark, game, home, question, user } from "../Constants/svgs";
import CustomToggle from "../assets/CustomToggle";
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbarcontainer">
        <div className="logo">
          <Svg path={game} classlist="logo__icon" view="-2 0 23 20" />
        </div>
        <div className="navbarlist">
          <div className="navbarlist__item">
            <Svg
              path={home}
              classlist="navbarlist__item__icon"
              view="0 0 32 32"
            />
          </div>
          <div className="navbarlist__item">
            <Svg
              path={user}
              classlist="navbarlist__item__icon"
              view="0 0 20 20"
            />
          </div>
          <div className="navbarlist__item active">
            <Svg
              path={bookmark}
              classlist="navbarlist__item__icon"
              view="0 0 18 18"
            />
          </div>
          <div className="navbarlist__item">
            <Svg
              path={question}
              classlist="navbarlist__item__icon"
              view="0 0 20 20"
            />
          </div>
        </div>
        <div className="navbarlist__item">
          <CustomToggle />
        </div>
      </div>
    </div>
  );
}
