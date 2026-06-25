import React from "react";

function Card(prop) {
  return <div>
    <h1>{prop.name}</h1>
    <p>{prop.category}</p>
    <a href={prop.url} target="_blank">{prop.label}</a>
  </div>;
}

export default Card;
