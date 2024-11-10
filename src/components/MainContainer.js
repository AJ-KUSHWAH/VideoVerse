import React, { Suspense, lazy, useEffect } from "react";
import ButtonList from "./ButtonList";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../utilities/appSlice";
import Shimmer from "./Shimmer";

const VideoContainer = lazy(() => import("./VideoContainer"));

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, [dispatch]);

  return (
    <div
      className={`w-full no-scrollbar ${
        isMenuOpen ? "flex-[0.85]" : "flex-1"
      } px-2 pt-8 max-w-full`}
      // className={`${isMenuOpen && "flex-[0.85]"} max-sm:${
      //   isMenuOpen && "flex-1"
      // }  px-2 pt-8 max-w-full `}
    >
      <ButtonList />
      <Suspense fallback={<Shimmer />}>
        <VideoContainer />
      </Suspense>
    </div>
  );
};

export default MainContainer;
