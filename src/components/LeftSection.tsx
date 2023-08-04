import React from "react";
import { motion } from "framer-motion";
import "../styles/components/leftsection.css";
import Svg from "../assets/Svg";
import { leftchevron } from "../Constants/svgs";
const cards = [
  {
    image: "/assassin.jpg",
    price: "80",
    oldprice: "120",
    sold: "15",
    title: "Assassin Creed",
  },
  {
    image: "/cyberpunk.jpg",
    price: "80",
    oldprice: "120",
    sold: "15",
    title: "Cyberpunk",
  },
  {
    image: "/halo.jpg",
    price: "80",
    oldprice: "120",
    sold: "15",
    title: "Halo",
  },
  {
    image: "/sro.jpg",
    price: "80",
    oldprice: "120",
    sold: "15",
    title: "Star Wars",
  },
  {
    image: "spiderman.jpg",
    price: "80",
    oldprice: "120",
    sold: "15",
    title: "Spiderman",
  },
  {
    image: "cod.jpg",
    price: "80",
    oldprice: "120",
    sold: "15",
    title: "Call of Duty",
  },
];
export default function LeftSection() {
  return (
    <motion.div className="leftsection">
      <Hero />
      <div className="leftsection__section__title">
        Best Sellers
        <Svg
          path={leftchevron}
          view="0 0 20 20"
          classlist="leftsection__section__title__icon"
        />
      </div>
      <div className="leftsection__content">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <motion.div className="hero">
      <div className="heroimage">
        <img src="/hogwarts.jpg" alt="hero" />
      </div>
      <div className="herotext">
        <div className="herotext__tag">New</div>
        <div className="herotext__title">Hogwarts</div>
        <div className="herotext__description">Legacy</div>
        <div className="herotext__price">
          <span className="herotext__price__new">$ 49.99</span>

          <span className="herotext__price__old">$ 99.99</span>
          <span className="herotext__price__sold">-20%</span>
        </div>
      </div>
      <div className="herotext__button">
        Explore
        <Svg path={leftchevron} view="0 0 20 20" classlist="hero__icon" />
      </div>
    </motion.div>
  );
}

function Card({
  image,
  title,
  price,
  oldprice,
  sold,
}: {
  image: string;
  title: string;
  price: string;
  oldprice: string;
  sold: string;
}) {
  return (
    <div className="bestseller__card">
      <div className="card__glow"></div>

      <img src={image} alt="card" className="bestseller__card__image" />
      <div className="bestseller__card__title">{title}</div>
      <div className="bestseller__card__price">
        <span className="bestseller__card__price__new">$ {price}</span>
        <span className="bestseller__card__price__old">$ {oldprice}</span>
        <span className="bestseller__card__price__sold">- {sold} %</span>
      </div>
    </div>
  );
}
