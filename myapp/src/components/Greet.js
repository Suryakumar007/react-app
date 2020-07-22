import React from "react";

let Greet = ({ name, heroName }) => {
  /*const { name, heroName } = props;*/
  return (
    <h2>
      "Hello {name}" a.k.a {heroName}
    </h2>
  );
};

export default Greet;
