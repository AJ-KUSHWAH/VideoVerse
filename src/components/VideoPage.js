import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utilities/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const VideoPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();
  let videoId = searchParams.get("v");

  return (
    <div className=" px-24 py-10 ">
      <div className="flex ">
        <div className="rounded-lg">
          <iframe
            width="950"
            height="500"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="m-2 p-2 h-auto border border-black overflow-auto">
            <h1 className="text-xl font-bold">Video Title</h1>
            <div className="flex my-2">
              <img
                className="h-5"
                alt="user-icon"
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              ></img>
              <span className="mx-2">Channel Name</span>
              <button className="mx-2 size-max rounded-lg bg-slate-500">
                Subscribe
              </button>
              <div className="flex flex-row-reverse mx-auto">
                <div className="flex rounded-full shadow-sm bg-slate-300">
                  <button className="mx-2">👍</button>
                  <button className="mx-2">👎</button>
                </div>

                <button className="mx-4 rounded-full shadow-sm bg-slate-300">
                  Share
                </button>
                <button className="mx-4 rounded-full shadow-sm bg-slate-300">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <LiveChat />
        </div>
      </div>

      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default VideoPage;
