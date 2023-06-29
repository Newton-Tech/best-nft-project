import { EyeIcon } from "Assets/svgs";
import { Button } from "Components/Button";
import React from "react";
import { NFTCard } from "./NFTCard";
const NFTs = [
  {
    artistName: "MoonDancer",
    artistAvatar: "https://via.placeholder.com/24x24",
    NFTImage: "https://via.placeholder.com/330x296",
    NFTName: "Distant Galaxy",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "NebulaKid",
    artistAvatar: "https://via.placeholder.com/24x24",
    NFTImage: "https://via.placeholder.com/330x296",
    NFTName: "Life On Edena",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Spaceone",
    artistAvatar: "https://via.placeholder.com/24x24",
    NFTImage: "https://via.placeholder.com/330x296",
    NFTName: "AstroFiction",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
];
export const DiscoverMoreNFTs = () => {
  return (
    <div className="w-full h-[780px] py-20 bg-zinc-800 flex-col justify-start items-center gap-[60px] inline-flex">
      <div className="w-full h-[91px] justify-start items-end gap-[100px] inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch text-white text-[38px] font-semibold capitalize leading-10">
            Discover More NFTs
          </div>
          <div className="self-stretch text-white text-[22px] font-normal capitalize leading-9">
            Explore new trending NFTs
          </div>
        </div>
        <Button className="w-[187px] h-[60px] px-[50px] rounded-2xl border border-purple-500 justify-center items-center gap-3 flex">
          <img src={EyeIcon} alt="" />
          <div className="text-center text-white text-[16px] font-semibold leading-snug">
            See All
          </div>
        </Button>
      </div>

      <div className={`w-full grid grid-cols-3 gap-[30px]`}>
        {NFTs.map((nft, key) => (
          <NFTCard
            key={key + 1}
            NFTImage={nft.NFTImage}
            NFTName={nft.NFTName}
            artistAvatar={nft.artistAvatar}
            artistName={nft.artistName}
            highestBid={nft.highestBid}
            price={nft.price}
          />
        ))}
      </div>
    </div>
  );
};
