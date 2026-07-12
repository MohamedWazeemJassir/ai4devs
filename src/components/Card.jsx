import { FaExternalLinkAlt } from "react-icons/fa";
import * as Icons from "@lobehub/icons";

function Card(prop) {
  const Avatar = Icons[prop.logo]?.Avatar;
  return (
    <div className="border overflow-hidden shadow-gray-300 hover:shadow-gray-100 p-6 w-1/4 rounded delay-75 duration-150 transition hover:-translate-y-1 hover:bg-gray-500 space-y-3">
      <a
        className="flex justify-end"
        href={prop.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaExternalLinkAlt />
      </a>
      <div id="middle" className="flex gap-3 items-center">
        {Avatar && <Avatar size={40} />}
        <h1 className="text-2xl">{prop.name}</h1>
      </div>
      <p className="pl-2">{prop.description}</p>
      <div id="bottom" className="flex gap-2">
        <p className="p-2 rounded bg-red-500 w-fit">{prop.category}</p>
        <p className="p-2 rounded bg-yellow-600 w-fit">{prop.pricing}</p>
      </div>
    </div>
  );
}

export default Card;
