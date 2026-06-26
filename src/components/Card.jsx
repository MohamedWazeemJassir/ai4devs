function Card(prop) {
  return <div>
    <h1>{prop.name}</h1>
    <p>{prop.category}</p>
    <a href={prop.url} target="_blank">Open</a>
  </div>;
}

export default Card;
