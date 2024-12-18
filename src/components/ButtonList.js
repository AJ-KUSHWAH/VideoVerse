import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import buttonList from "../utilities/button-list";
import { activeButtonFilterHandler } from "../utilities/buttonFilterSlice";
import {
  YOUTUBE_CATEGORY_VIDEO_API,
  YOUTUBE_API_URL,
} from "../utilities/Constants";
import { allFilterVideosHandler } from "../utilities/videoSlice";

const ButtonList = () => {
  const [error, setError] = useState(false);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const activeButton = useSelector((store) => store.buttonFilter.activeButton);
  const allVideos = useSelector((store) => store.videos.allVideos);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (activeButton === "All") {
        dispatch(allFilterVideosHandler(allVideos));
      } else {
        getVideosByCategory(activeButton);
      }
    } catch (error) {}
  }, [activeButton]);

  const getVideosByCategory = async (activeButton) => {
    const res = await fetch(YOUTUBE_CATEGORY_VIDEO_API(activeButton));
    const data = await res.json();
    dispatch(allFilterVideosHandler(data.items));
  };

  return (
    <div className="flex items-center relative mr-2 ml-4 ">
      {/* <div className="flex items-center absolute left-0">
        <i className="fa-solid fa-angle-left fa-xl pr-4 py-5 gray-50"></i>
        <div className=" bg-gradient-to-r from-gray-50 py-5 w-4"></div>
      </div> */}

      <div
        className={`overflow-x-auto whitespace-nowrap no-scrollbar w-full ${
          isMenuOpen ? "max-w-[85%]" : "max-w-full"
        }`}
      >
        {buttonList.map((name, index) => (
          <ul key={index} className="inline-block">
            <li
              className={`text-center  bg-gray-200 py-2 px-5 rounded-md mr-3 font-semibold cursor-pointer  ${
                activeButton === name
                  ? "bg-gray-600 text-white"
                  : " hover:bg-gray-300 transition ease-in-out delay-100"
              }`}
              onClick={() => dispatch(activeButtonFilterHandler(name))}
            >
              {name}
            </li>
          </ul>
        ))}
      </div>
      {/* 
      <div className="flex items-center absolute right-0">
        <div className=" bg-gradient-to-l from-gray-50 py-5 w-4"></div>
        <i className="fa-solid fa-angle-right fa-xl pl-4 py-5 bg-gray-50"></i>
      </div> */}
    </div>
  );
};

export default ButtonList;
