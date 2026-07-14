import { FaExternalLinkAlt } from "react-icons/fa";
import * as Icons from "@lobehub/icons";

function Card({ logo, name, url, description, category, pricing }) {
  const Avatar = Icons[logo]?.Avatar;
  return (
    <div className="border bhover:shadow-gray-100order-zinc-800 bg-zinc-900 shadow-gray-300 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500 p-6 w sm:w-1/5 rounded delay-75 duration-150 transition hover:-translate-y-2 space-y-3">
      <div className="flex gap-3 items-center">
        {Avatar && <Avatar size={40} />}
        <span className="text-2xl">{name}</span>
        <a href={url} rel="noopener noreferrer" target="_blank">
          <FaExternalLinkAlt />
        </a>
      </div>
      <p>{description}</p>
      <div className="flex gap-2">
        <span className="p-2 rounded bg-red-500">{category}</span>
        <span className="p-2 rounded bg-yellow-600">{pricing}</span>
      </div>
    </div>
  );
}

export default Card;
