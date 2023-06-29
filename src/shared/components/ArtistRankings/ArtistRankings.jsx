import React from "react";
import { Tabs } from "./Tabs";
// import {
//   Table,
//   Th,
//   TableBody,
//   TableCaption,
//   TableColumn,
//   TableFooter,
//   TableHeadItem,
//   TableHeader,
//   TableRow,
// } from "Components/Table";
const tableHeader = ["#", "Artist", "Change", "NFTs Sold", "Colume"];

export const ArtistRankings = () => {
  return (
    <>
      <div className="w-full h-[271px] py-20 bg-zinc-800 flex-col justify-start items-center gap-10 inline-flex">
        <div className="w-full text-white text-[51px] font-semibold capitalize leading-10">
          Top Creators
        </div>
        <div className="w-full text-white text-[22px] font-normal leading-9">
          Check out top ranking NFT artists on the NFT Marketplace.
        </div>
      </div>
      <Tabs />

      {/* <Table> */}
      {/* <TableHeader> */}
      <div className="w-full h-[46px] py-3 rounded-2xl border border-neutral-700  justify-start items-center gap-2.5 flex">
        <div className="grow h-[22px] justify-start items-center gap-5 inline-flex">
          <div className="w-[30px] text-center text-zinc-500 text-[16px] font-normal leading-snug">
            #
          </div>
          <div className="text-white text-[16px] font-normal leading-snug">
            Artist
          </div>
        </div>

        <div className="w-40 text-white text-[16px] font-normal leading-snug">
          Change
        </div>
        <div className="w-40 text-white text-[16px] font-normal leading-snug">
          NFTs Sold
        </div>
        <div className="w-40 text-white text-[16px] font-normal leading-snug">
          Volume
        </div>
      </div>
      {/* </TableHeader> */}
      {/* </Table> */}
    </>
  );
};
