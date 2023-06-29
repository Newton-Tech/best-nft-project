import { BrandIcon, StoreFrontIcon, UserIcon } from "Assets/svgs";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="inline-flex h-[100px] w-full items-center justify-between bg-zinc-800 px-[50px] py-5">
      <div className="flex items-center justify-start gap-2.5">
        <Link to={`/`} className={`flex items-center gap-[.625rem]`}>
          <img src={StoreFrontIcon} alt="" />

          <img src={BrandIcon} alt="" />
        </Link>
      </div>

      <div className="flex items-center justify-end gap-2.5">
        <Link
          to={`/marketplace`}
          className="flex w-[139px] items-center justify-center gap-3 rounded-2xl px-5"
        >
          <div className="text-center text-[16px] font-semibold leading-snug text-white">
            Marketplace
          </div>
        </Link>
        <Link
          to={`/rankings`}
          className="flex w-28 items-center justify-center gap-3 rounded-2xl px-5"
        >
          <div className="text-center text-[16px] font-semibold leading-snug text-white">
            Rankings
          </div>
        </Link>
        <Link
          to={`/connect-wallet`}
          className="flex w-[174px] items-center justify-center gap-3 rounded-2xl px-5"
        >
          <div className="text-center text-[16px] font-semibold leading-snug text-white">
            Connect a wallet
          </div>
        </Link>

        <Link
          to={`/create-account`}
          className="cursor-pointer inline-flex h-[60px] w-[152px] items-center justify-center gap-3 rounded-2xl bg-purple-500 px-[30px]"
        >
          <UserIcon />

          <div className="text-center text-[16px] font-semibold leading-snug text-white hover:text-white">
            Sign Up
          </div>
        </Link>
      </div>
    </div>
  );
};
