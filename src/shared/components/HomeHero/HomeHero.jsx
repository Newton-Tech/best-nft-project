// import { PurpleButton } from "Components/Button";

import { RocketLaunchIcon } from "Assets/svgs";
import { AnimakidImg, HeroImage } from "Assets/images";
import { Link } from "react-router-dom";
// import { Button } from "Components/Button";

export const HomeHero = () => {
  return (
    <div className="flex h-fit w-full items-start justify-start gap-[30px] bg-zinc-800 py-[80px]">
      <div className={`flex h-[544px] w-1/2 flex-col justify-between  py-5`}>
        <div className="flex h-[244px] w-full items-center text-[67px] font-semibold capitalize leading-[74px] text-white">
          Discover <br />
          digital art & <br />
          Collect NFTs
        </div>
        <div className="w-full text-[22px] font-normal capitalize leading-9 text-white">
          NFT marketplace for whitelabel solution
        </div>
        <Link
          to={`/create-account`}
          className={`flex h-[60px] w-fit min-w-[250px] gap-[12px] rounded-[20px] bg-purple-500 justify-center items-center text-white hover:text-white`}
        >
          <RocketLaunchIcon />
          Get Started
        </Link>
        <div className={`flex w-full`}>
          <div>
            <div className="w-[150px] text-[28px] font-bold capitalize leading-10 text-white">
              240k+{" "}
            </div>
            <div className="w-[150px] text-[23.9904px] font-normal capitalize leading-10 text-white">
              Total Sale
            </div>
          </div>
          <div>
            <div className="w-[150px] text-[28px] font-bold capitalize leading-10 text-white">
              100k+
            </div>
            <div className="w-[150px] text-[23.9904px] font-normal capitalize leading-10 text-white">
              Auctions
            </div>
          </div>
          <div>
            <div className="w-[150px] text-[28px] font-bold capitalize leading-10 text-white">
              240k+
            </div>
            <div className="w-[150px] text-[23.9904px] font-normal capitalize leading-10 text-white">
              Artists
            </div>
          </div>
        </div>
      </div>

      <div className={`flex h-[544px] w-1/2 flex-col `}>
        <img
          className="h-[401px] w-full rounded-tl-2xl rounded-tr-2xl"
          src={HeroImage}
        />
        <div className="inline-flex h-[109px] w-full flex-col items-center justify-center gap-2.5 rounded-bl-2xl rounded-br-2xl bg-neutral-700 p-5">
          <div className="self-stretch text-[22px] font-semibold capitalize leading-loose text-white">
            Space Walking
          </div>
          <div className="inline-flex items-start justify-start gap-3 self-stretch rounded-2xl">
            <div className="flex items-start justify-start gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center">
                <img className="h-6 w-6 rounded-[120px]" src={AnimakidImg} />
              </div>
            </div>
            <div className="shrink grow basis-0 text-[16px] font-normal leading-snug text-white">
              Animakid
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
