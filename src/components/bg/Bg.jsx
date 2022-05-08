import React from "react";
import './bg.css';

const Bg = (props) => {
  return (
    <div className="container">
      <div className="bg__container">{props.children}</div>
      <img
        id="bg__dot-1"
        className="bg__dot"
        src="https://hype4.academy/_next/static/media/ovalShadow.793e2be7.svg"
        // src="/img/dot-red.png"
        alt="dots for background effect"
      />
      <img
        id="bg__dot-2"
        className="bg__dot"
        src="https://hype4.academy/_next/static/media/ovalShadow.793e2be7.svg"
        // src="/img/dot-red.png"
        alt="dots for background effect"
      />
      <img
        id="bg__dot-3"
        className="bg__dot"
        src="https://hype4.academy/_next/static/media/ovalShadow.793e2be7.svg"
        alt="dots for background effect"
      />
    </div>
  );
};

export default Bg;
