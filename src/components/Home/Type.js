import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor de software",
          "Entusiasta de machine learning",
          "Instrutor de robótica",
          "Futuro cientista da computação",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 15,
      }}
    />
  );
}

export default Type;
