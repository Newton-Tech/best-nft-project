// import { CollectionCard } from "./CollectionCard";

// import { RocketLaunchIcon } from "Assets/svgs";
import { PainBrushIcon } from "Assets/svgs";
import { CategoryCard } from "./CategoryCard";
import { Artimage } from "Assets/images";
const categories = [
  { name: "Art", amount: 34.53, icon: PainBrushIcon, bgImg: Artimage },
  {
    name: "Collectibles",
    amount: 34.53,
    icon: "",
    bgImg: "https://via.placeholder.com/240x240",
  },
  {
    name: "Music",
    amount: 34.53,
    icon: "",
    bgImg: "https://via.placeholder.com/240x240",
  },
  {
    name: "Photography",
    amount: 34.53,
    icon: "",
    bgImg: "https://via.placeholder.com/240x240",
  },
  {
    name: "Video",
    amount: 34.53,
    icon: "",
    bgImg: "https://via.placeholder.com/240x240",
  },
  {
    name: "Utility",
    amount: 34.53,
    icon: "",
    bgImg: "https://via.placeholder.com/240x240",
  },
  {
    name: "Sport",
    amount: 34.53,
    icon: "",
    bgImg: "https://via.placeholder.com/240x240",
  },
  {
    name: "Virtual Worlds",
    amount: 34.53,
    icon: "",
    bgImg: "https://via.placeholder.com/240x240",
  },
];
export const BrowseCategories = () => {
  return (
    <div className="w-full h-[58rem] py-20 bg-zinc-800 flex-col justify-start items-center gap-[3.75rem] inline-flex">
      <div className="w-full h-[2.875rem] text-white text-[2.375rem] font-semibold capitalize leading-10">
        Browse Categories
      </div>

      <div className={`grid grid-cols-4 w-full gap-[30px]`}>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            bgImg={category.bgImg}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
};
