import React from "react";
import { NavLink } from "react-router-dom";
const links = [
  { url: "/search", text: "All", image:"magnifying-glass"},
  { url: "/news", text: "News", image:"newspaper"},
  { url: "/image", text: "Images", image:"image"},
  { url: "/video", text: "Videos", image:"video"}
];
const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between mt-4 ">
      {links.map(({ url, text, image }) => (
        <NavLink
          to={url}
          className={navData => (
            navData.isActive
              ? "mr-9 text-blue-700 md:relative md:right-16 px-15 border-b-2 dark:text-blue-300 border-blue-700 dark:border-blue-300 pb-2 mb-0"
              : "mr-9 text-700 pb-2 md:relative md:right-16 hover:text-blue-700 dark:hover:text-blue-300"
          )}
        >
          <i class={`fa-solid fa-${image}`}></i> {" " + text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
