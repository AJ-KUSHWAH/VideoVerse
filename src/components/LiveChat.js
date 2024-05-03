import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utilities/chatSlice";
import {
  generateRandomMessages,
  generateRandomNames,
} from "../utilities/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const liveMessages = useSelector((store) => store.chat.messages);

  const [liveChatMessages, setLiveChatMessages] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessages(20) + "✨",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="h-[490px] ml-8 m-2 p-2 border border-black w-96 overflow-y-scroll flex flex-col-reverse">
        {liveMessages.map((c, i) => (
          <LiveMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="p-2 m-2 ml-8 border border-b-lime-950"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ajay Kushwah",
              message: liveChatMessages,
            })
          );
          setLiveChatMessages("");
        }}
      >
        <input
          className="border border-black"
          type="text"
          placeholder="Type your message"
          onChange={(e) => setLiveChatMessages(e.target.value)}
        />

        <button className="ml-2 px-2 border border-blue-950">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
