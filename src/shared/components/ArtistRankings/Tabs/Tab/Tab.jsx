import React from "react";

export const Tab = ({ name, currentTab, setCurrentTab }) => {
  return (
    <div
      onClick={() => setCurrentTab(name)}
      className={`${
        currentTab === name ? "border-b-2 border-b-zinc-500" : ""
      } cursor-pointer grow shrink basis-0 h-[60px] px-[30px] justify-center items-center gap-4 flex`}
    >
      <div
        className={`text-center ${
          currentTab === name ? "text-white" : "text-[#858584]"
        } text-[22px] font-semibold capitalize leading-loose`}
      >
        {name}
      </div>
    </div>
  );
};
