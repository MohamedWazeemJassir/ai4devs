import { FaExternalLinkAlt } from "react-icons/fa";
import * as Icons from "@lobehub/icons";

function Card(prop) {
  const { logo, name, url, description, category, pricing } = prop;
  const Avatar = Icons[logo]?.Avatar;
  return (
    <div className="border shadow-gray-300 hover:shadow-gray-100 p-6 w-1/4 rounded delay-75 duration-150 transition hover:-translate-y-1 hover:bg-gray-500 space-y-3">
      <div id="middle" className="flex gap-3 items-center">
        {Avatar && <Avatar size={40} />}
        <h1 className="text-2xl">{name}</h1>
        <a href={url} rel="noopener noreferrer" target="_blank">
          <FaExternalLinkAlt />
        </a>
      </div>
      <p>{description}</p>
      <div id="bottom" className="flex gap-2">
        <p className="p-2 rounded bg-red-500">{category}</p>
        <p className="p-2 rounded bg-yellow-600">{pricing}</p>
      </div>
    </div>
  );
}

export default Card;
