import React from "react";
import ReactDOM from "react-dom";

function Product(props) {
  console.log(props);
  return (
    <div>
      <h3>name = {props.name}</h3>
      <h3>price = {props.price}</h3>
    </div>
  );
}

export default Product;
