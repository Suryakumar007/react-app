import React from "react";

function ListRendering() {
  const names = ["Bruce", "Peter", "Tony"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}

export default ListRendering;
