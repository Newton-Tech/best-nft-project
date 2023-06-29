import { memo } from "react";
import { ArtistRankings } from "Components/ArtistRankings";

function Rankings() {
  return (
    <div className={`px-base`}>
      <ArtistRankings />
    </div>
  );
}

export default memo(Rankings);
