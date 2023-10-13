import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-100vh flex flex-col background relative items-center">
      <h1 className="font-bold bg-white w-11/12 text-center mt-[40px] text-3xl mx-auto py-2 px-10 rounded-lg">
        Random GIF
      </h1>
      <div className="w-full flex flex-col items-center">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
