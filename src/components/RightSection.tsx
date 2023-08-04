import React, { useState } from "react";
import "../styles/components/rightsection.css";
import Svg from "../assets/Svg";
import { chat, leftchevron, settings } from "../Constants/svgs";
import { motion } from "framer-motion";
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
const online = [
  {
    image: "/assassin.jpg",
    username: "John012",
    name: "John Doe",
  },
  {
    image: "/cyberpunk.jpg",
    username: "DanielleP52",
    name: "Danielle",
  },
  {
    image: "/halo.jpg",
    username: "Bazzingha",
    name: "Bazzingha",
  },
];
export default function RightSection() {
  return (
    <div className="rightsection">
      <MyGames />
      <Online />
    </div>
  );
}
function MyGames() {
  return (
    <div className="mygames">
      <div className="mygames__title">
        <div className="my__games__title__text">My Games</div>
        <div className="mygames__title__extra">
          <div className="mygames__title__extra__text">View All</div>
          <Svg
            path={leftchevron}
            view="0 0 18 18"
            classlist="mygames__title__extra__icon"
          />
        </div>
      </div>
      <div className="carousel__container">
        <Carousel />
      </div>
      <div className="gamedetails">
        <div className="gamedetails__title">Assassin Creed</div>
        <div className="gamedetails__progress">
          <div className="gamedetails__progress__up">
            <div className="gamedetails__progress__up__text">Progress</div>
            <div className="gamedetails__progress__up__percent">70%</div>
          </div>
          <div className="gamedetails__progress__bar">
            <div className="gamedetails__progress__bar__fill"></div>
          </div>
        </div>
        <div className="gamedetails__stats">
          <div className="gamedetails__stats__item">
            <div className="gamedetails__stats__item__title">Game Time</div>
            <div className="gamedetails__stats__item__value">20h 30m</div>
          </div>
          <div className="gamedetails__stats__item">
            <div className="gamedetails__stats__item__title">Last Played</div>
            <div className="gamedetails__stats__item__value">2 days ago</div>
          </div>
          <div className="gamedetails__stats__item">
            <div className="gamedetails__stats__item__title">Game Progress</div>
            <div className="gamedetails__stats__item__value">
              70% (Story Mode)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Carousel() {
  const [currentindex, setCurrentindex] = useState(5);
  return (
    <motion.div
      className="carousel"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      dragMomentum={false}
      dragTransition={{
        bounceStiffness: 200,
        bounceDamping: 10,
        min: 0,
        max: 0,
      }}
      draggable={true}
      onDragEnd={(event, info) => {
        if (info === undefined) return;
        if (info.velocity.x > 0) {
          if (currentindex === 0) return setCurrentindex(cards.length - 1);
          setCurrentindex(currentindex - 1);
        } else {
          if (currentindex === cards.length - 1) return setCurrentindex(0);
          setCurrentindex(currentindex + 1);
        }
      }}
      onClick={(event) => {
        const img = event.target as HTMLImageElement;
        const boundingRect = img.getBoundingClientRect();
        const clickX = event.clientX - boundingRect.left;
        const divWidth = boundingRect.width;
        const isLeftHalfClick = clickX <= divWidth / 2;

        if (isLeftHalfClick) {
          if (currentindex === 0) return setCurrentindex(cards.length - 1);
          setCurrentindex(currentindex - 1);
        } else {
          if (currentindex === cards.length - 1) return setCurrentindex(0);
          setCurrentindex(currentindex + 1);
        }
      }}
    >
      {cards.map((card, index) => (
        // <motion.div
        //   className={`carousel__image ${
        //     index === currentindex ? "active" : ""
        //   }`}
        //   key={index}
        //   onClick={(event) => {
        //     const img = event.target as HTMLImageElement;
        //     const boundingRect = img.getBoundingClientRect();
        //     const clickX = event.clientX - boundingRect.left;
        //     const divWidth = boundingRect.width;
        //     const isLeftHalfClick = clickX <= divWidth / 2;

        //     if (isLeftHalfClick) {
        //       if (currentindex === 0) return setCurrentindex(cards.length - 1);
        //       setCurrentindex(currentindex - 1);
        //     } else {
        //       if (currentindex === cards.length - 1) return setCurrentindex(0);
        //       setCurrentindex(currentindex + 1);
        //     }
        //   }}
        //   animate={{
        //     x: gettransform(index),
        //     z: getz(index),

        //   }}
        //   dragListener={false}
        // >
        //   <img key={index} src={card.image} alt={card.title} />
        // </motion.div>
        <CarouselItem
          key={index}
          index={index}
          currentindex={currentindex}
          setCurrentindex={setCurrentindex}
          image={card.image}
          title={card.title}
        />
      ))}
    </motion.div>
  );
}

function CarouselItem({
  index,
  currentindex,
  setCurrentindex,
  image,
  title,
}: {
  index: number;
  currentindex: number;
  setCurrentindex: React.Dispatch<React.SetStateAction<number>>;
  image: string;
  title: string;
}) {
  const gettransform = (index: number) => {
    if (index === currentindex) return 0;
    if (index < currentindex) return Math.abs(currentindex - index) * -100;
    if (index > currentindex) return Math.abs(currentindex - index) * 100;
  };
  const getz = (index: number) => {
    if (index === currentindex) return 200;
    if (index < currentindex) return 200 - Math.abs(currentindex - index) * 170;
    if (index > currentindex) return 200 - Math.abs(currentindex - index) * 170;
  };
  return (
    <motion.div
      className={`carousel__image ${index === currentindex ? "active" : ""}`}
      key={index}
      onClick={(event) => {
        const img = event.target as HTMLImageElement;
        const boundingRect = img.getBoundingClientRect();
        const clickX = event.clientX - boundingRect.left;
        const divWidth = boundingRect.width;
        const isLeftHalfClick = clickX <= divWidth / 2;

        if (isLeftHalfClick) {
          if (currentindex === 0) return setCurrentindex(cards.length - 1);
          setCurrentindex(currentindex - 1);
        } else {
          if (currentindex === cards.length - 1) return setCurrentindex(0);
          setCurrentindex(currentindex + 1);
        }
      }}
      animate={{
        x: gettransform(index),
        z: getz(index),
      }}
      dragListener={false}
    >
      <img key={index} src={image} alt={title} />
    </motion.div>
  );
}
function Online() {
  return (
    <div className="mygames">
      <div className="mygames__title">
        <div className="my__games__title__text">
          Online Now
          <span className="greendot"></span>
        </div>
        <div className="mygames__title__extra">
          <div className="mygames__title__extra__text">View All</div>
          <Svg
            path={leftchevron}
            view="0 0 18 18"
            classlist="mygames__title__extra__icon"
          />
        </div>
      </div>
      <div className="online__list">
        {online.map((item, index) => (
          <OnlineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function OnlineItem({
  image,
  username,
  name,
}: {
  image: string;
  username: string;
  name: string;
}) {
  return (
    <div className="onlineitem">
      <div className="onlineitem__image">
        <img src={image} alt="onlineimage" />
      </div>
      <div className="onlineitem__text">
        <div className="onlineitem__text__title">
          {username}
          <span className="greendot"></span>
        </div>
        <div className="onlineitem__text__subtitle">{name}</div>
      </div>

      <div className="onlineitem__icons">
        <Svg path={chat} view="0 0 28 28" classlist="onlineitem__icons__icon" />
        <Svg
          path={settings}
          view="0 0 28 28"
          classlist="onlineitem__icons__icon"
        />
      </div>
    </div>
  );
}
