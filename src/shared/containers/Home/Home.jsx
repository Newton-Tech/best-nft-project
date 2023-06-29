import { memo } from "react";
import { HomeHero } from "../../components/HomeHero";
import { TrendingCollection } from "../../components/TrendingCollection";
import { TopCreators } from "../../components/TopCreators";
import { BrowseCategories } from "Components/BrowseCategories";
import { DiscoverMoreNFTs } from "Components/DiscoverMoreNFTs";
import { NFTHighlight } from "Components/NFTHighlight";
import { HowItWorks } from "Components/HowItWorks/HowItWorks";
import { SubscribeWidget } from "Components/SubscribeWidget";

function Home() {
  return (
    <>
      <div className={`px-base w-full`}>
        <HomeHero />
        <TrendingCollection />
        <TopCreators />
        <BrowseCategories />
        <DiscoverMoreNFTs />
      </div>
      <NFTHighlight />
      <div className="px-base">
        <HowItWorks />
        <SubscribeWidget />
      </div>
    </>
  );
}

export default memo(Home);
