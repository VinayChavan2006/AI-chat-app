import { data } from "autoprefixer";
import axios from "axios";
import React, { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked";
import Markdown from "react-markdown";

const Chat = () => {
  const prompt_input = useRef();
  const [prompt, setPrompt] = useState("");
  const [open, setOpen] = useState(true);
  const [response, setResponse] = useState();
  const [chats,setChats] = useState([]);
  const handleSubmit = async (e) => {
    console.log(e)
    if (e.key == "Enter" || e.type == "click") {
      setOpen(false);
      prompt_input.current.value = "";
      const url =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAYdNYScCS_xyYf41VdrqDPR3kPrKjL7F4";
      const genAI = new GoogleGenerativeAI(
        "AIzaSyAYdNYScCS_xyYf41VdrqDPR3kPrKjL7F4"
      );
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // const prompt = "Write a story about a magic backpack.";

      const result = await model.generateContent(prompt);
      console.log(result.response.text());

      setResponse(result.response.text());
      setChats((chats)=>[...chats,result.response.text()])
    }
  };
  return (
    <>
      <div className="w-screen h-screen bg-gray-950">
        <div className="w-full h-12 bg-slate-900">
          <h1 className="text-white text-2xl p-2 font-extrabold">Chat AI</h1>
        </div>
        {open && (
          <div className="flex flex-col ml-20 mt-28 gap-7 items-center">
            <h1 className="text-6xl font-bold text-gray-300">Welcome</h1>
            <p className="text-4xl font-mono text-gray-600 ">
              How can I help you today?
            </p>
          </div>
        )} 
        { chats && chats.map((item)=> (
          // {chats.map((item)=>(
            <div className="w-1/2 h-[60%] mt-16 text-white overflow-y-scroll flex flex-col gap-3 no-scrollbar p-5 bg-slate-700 rounded-lg fixed right-5">
            <div className="font-bold w-fit pl-2 pr-2 pt-1 pb-1 bg-slate-950 rounded-lg text-white">
              AI:
            </div>
            {response ? (
              <Markdown>{item}</Markdown>
            ) : (
              <div class="flex justify-center items-center h-screen">
                <div class="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
              </div>
            )}
          </div>
          // ))}
        )) }
        

        <div className="flex h-14 w-full justify-center gap-3 fixed bottom-8 items-center">
          <input
            ref={prompt_input}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => handleSubmit(e)}
            name="prompt"
            className="w-3/4 h-14 bg-slate-900 rounded-full pl-6 text-white text-xl font-serif"
          />
          <IoIosSend className=" text-white bg-slate-700 rounded-full w-10 h-10 p-2" onClick={(e)=>handleSubmit(e)}/>
        </div>
      </div>
    </>
  );
};

export default Chat;
