function ArtistCard({
  name = "KeepitReal",
  image = "https://via.placeholder.com/120x120",
  amount = 0,
  count = 1,
}) {
  return (
    <div className="inline-flex h-fit flex-col items-center justify-start gap-5 rounded-2xl bg-neutral-700 p-5">
      <div className="inline-flex w-full items-start justify-start ">
        <div className="flex justify-center w-[1.875rem] h-[1.875rem] items-center text-center rounded-2xl  text-[1rem] font-normal leading-snug text-zinc-500 bg-zinc-800">
          {count}
        </div>
      </div>
      <div className="flex flex-col items-end justify-start">
        <div className="inline-flex w-[6.875rem] items-start justify-start gap-2.5">
          <div className="flex h-[7.5rem] w-[7.5rem] items-center justify-center">
            <img
              className="h-[7.5rem] w-[7.5rem] rounded-[6.25rem]"
              src={image}
            />
          </div>
        </div>
      </div>
      <div className="flex h-[3.625rem] flex-col items-center justify-center gap-[.3125rem] self-stretch">
        <div className="self-stretch text-center text-[1.375rem] font-semibold capitalize leading-loose text-white">
          {name}
        </div>
        <div className="inline-flex items-start justify-center gap-2.5 self-stretch">
          <div className="shrink grow basis-0 text-right text-[1rem] font-normal leading-snug text-zinc-500">
            Total Sales:
          </div>
          <div className="shrink grow basis-0 text-[1rem] font-normal leading-snug text-white">
            {amount.toFixed(2)} ETH
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
