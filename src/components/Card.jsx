function Card(prop) {
  return (
    <div className="ml-5 mb-5 border p-6 w-1/4 max-w-1/2 rounded delay-75 duration-150 transition hover:-translate-y-1 hover:bg-amber-800">
      <div id="top">
        <a className=" flex justify-end" href={prop.url} target="_blank">
          <button type="button" className="text-white rounded">
            Visit
          </button>
        </a>
      </div>
      <div id="middle">
        <h1 className="text-3xl">{prop.name}</h1>
      </div>
      <div id="bottom">
        <small className="m-1 rounded bg-red-500 p-1">{prop.category}</small>
        <small className="m-1 rounded bg-yellow-600 p-1">{prop.pricing}</small>
      </div>
    </div>
  );
}

export default Card;
