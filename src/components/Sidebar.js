import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-60 shadow-md p-2 ">
      <ul className="px-4 m-2 border-b-2">
        <Link to="/">
          <li className="p-1 ">Home</li>
        </Link>
        <li className="p-1 shadow-sm">Shorts</li>
        <li className="p-1 shadow-sm">Subscriptions</li>
      </ul>

      <h1 className=" text-md font-bold px-5 mx-2">You</h1>
      <ul className="px-4 m-2 border-b-2">
        <li className="p-1 shadow-sm">Liked Videos</li>
        <li className="p-1 shadow-sm">Watched</li>
        <li className="p-1 shadow-sm">History</li>
        <li className="p-1 shadow-sm">Downloads</li>
      </ul>

      <h1 className=" text-md font-bold px-5 mx-2">Explore</h1>
      <ul className="px-4 m-2 border-b-2">
        <li className="p-1 shadow-sm">Trending</li>
        <li className="p-1 shadow-sm">Music</li>
        <li className="p-1 shadow-sm">Sports</li>
        <li className="p-1 shadow-sm">Films</li>
      </ul>
    </div>
  );
};

export default Sidebar;
