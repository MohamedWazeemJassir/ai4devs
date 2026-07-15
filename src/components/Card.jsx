import { FaExternalLinkAlt } from "react-icons/fa";
import * as Icons from "@lobehub/icons";

function Card({ logo, name, url, description, category, pricing }) {
  const Avatar = Icons[logo]?.Avatar;
  return (
    <div className="border border-zinc-800 bg-zinc-900 shadow-gray-300 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500 p-6 w-full h-auto sm:w-1/5 rounded delay-75 duration-150 transition hover:-translate-y-2 space-y-3">
      <div className="flex gap-3 items-center">
        {Avatar && <Avatar size={40} />}
        <h2 className="text-2xl">{name}</h2>
        <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          className="text-amber-300 ml-auto"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
      <p>{description}</p>
      <div className="flex gap-2">
        <span className="p-2 rounded bg-red-700">{category}</span>
        <span className="p-2 rounded bg-yellow-700">{pricing}</span>
      </div>
    </div>
  );
}

export default Card;
