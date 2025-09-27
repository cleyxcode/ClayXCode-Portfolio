import React from "react";
import { TypeAnimation } from "react-type-animation";

function Animation() {
  return (
    <TypeAnimation
      sequence={[
        // Backend Development focus
        "Robust Backend Solutions.",
        2300,
        "Scalable Software Systems.",
        2300,
        "Interactive Game Experiences.",
        2300,
        "Full-Stack Applications.",
        2300,
        "Mobile Cross-Platform Apps.",
        2300,
        "Laravel & PHP Expertise.",
        2300,
        "Flutter & Unity Development.",
        2300,
      ]}
      speed={30}
      repeat={Infinity}
    />
  );
}

export default Animation;