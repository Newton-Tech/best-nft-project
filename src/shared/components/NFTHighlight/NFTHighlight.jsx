import React from "react";
import { Highlight } from "./Highlight";
const highlights = [
  "https://via.placeholder.com/330x296",
  "https://via.placeholder.com/330x296",
];
export const NFTHighlight = () => {
  return (
    <div className="w-full h-[660px] flex-col justify-start items-center inline-flex">
      <Highlight image={highlights[0]} />
    </div>
  );
};
