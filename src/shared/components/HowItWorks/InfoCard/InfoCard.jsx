import React from "react";

export const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="h-[439px] px-[30px] pt-2.5 pb-[30px] bg-neutral-700 rounded-2xl flex-col justify-start items-center gap-5 inline-flex">
      <div className="w-[250px] h-[250px] relative">
        <img src={icon} />
      </div>
      <div className="self-stretch h-[129px] flex-col justify-start items-center gap-2.5 flex">
        <div className="self-stretch text-center text-white text-[22px] font-semibold capitalize leading-loose">
          {title}
        </div>
        <div className="self-stretch text-center text-white text-[16px] font-normal leading-snug">
          {description}
        </div>
      </div>
    </div>
  );
};
