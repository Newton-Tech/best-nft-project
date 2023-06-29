import { EnvelopeSimple } from "Assets/svgs";
import { Button } from "Components/Button";
import React from "react";

export const SubscribeWidget = () => {
  return (
    <div className="w-full h-[550px] pt-10 pb-20 bg-zinc-800 flex-col justify-start items-center gap-2.5 inline-flex">
      <div className="w-full h-[430px] p-[60px] bg-neutral-700 rounded-2xl justify-between items-center gap-20 flex">
        <div>
          <img
            className="w-[425px] h-[310px] rounded-2xl"
            src="https://via.placeholder.com/425x310"
          />
        </div>

        <div className="grow h-[272px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="grow text-white text-[38px] font-semibold capitalize leading-10">
            Join our weekly digest
          </div>
          <div className="grow text-white text-[22px] font-normal capitalize leading-9">
            Get exclusive promotions & updates straight to your inbox.
          </div>

          <div className="self-stretch h-[60px] pl-5 py-4 bg-white rounded-2xl justify-start items-center gap-3 inline-flex">
            <div className="grow shrink basis-0 text-zinc-800 text-[16px] font-normal leading-snug">
              Enter your email here
            </div>

            <Button className="w-[211px] h-[60px] px-[50px] bg-purple-500 rounded-2xl justify-end items-center gap-3 inline-flex">
              <div className="w-5 h-5 relative">
                <EnvelopeSimple />
              </div>
              <div className="text-center text-white text-[16px] font-semibold leading-snug">
                Subscribe
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
