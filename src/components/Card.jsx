function Card(prop) {
  return (
    <div className="ml-5 mb-5 border p-6 size-fit rounded">
      <h1 className="text-3xl p-3">{prop.name}</h1>
      <a href={prop.url} target="_blank">
        <button
          type="button"
          className="bg-gray-300 text-black pe-3 rounded ps-3 mr-3"
        >
          Open
        </button>
      </a>
      <small className="pr-1">{prop.category}</small>
      <small className="m-1">{prop.pricing}</small>
    </div>
  );
}

export default Card;
