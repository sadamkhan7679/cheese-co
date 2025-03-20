import Image from "next/image";
import { CircleDollarSign, Gift, Cake, Smartphone } from "lucide-react";
import {
  AppleAppStoreButton,
  GooglePlayButton,
} from "@/components/ui/app-store-button";
import { CashbackIcon } from "@/icon/rewards/cashback";
import { GiftIcon } from "@/icon/rewards/gift";
import { CakeIcon } from "@/icon/rewards/cake";
import { SmartphoneIcon } from "@/icon/common/smartphone";

const rewardsData = [
  {
    title: "Cashback Rewards",
    description: "Cheese and more at great value!",
    icon: CashbackIcon,
  },
  {
    title: "Signup Bonus Rewards",
    description: "Earning cash back on every order, plus special",
    // icon: GiftIcon,
    icon: CashbackIcon,
  },
  {
    title: "Birthday Rewards",
    description: "Get special rewards on your birthday.",
    icon: CakeIcon,
  },
];

export const AppBanner = () => {
  return (
    <div className="bg-surface">
      <div className="app-container py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 w-full content-center gap-4">
        {/* App Download Section */}
        <div className="col-span-1 xl:col-span-1 flex items-center gap-4">
          <SmartphoneIcon />
          <h2 className="text-secondary text-2xl font-medium">
            Download Our <br className="hidden lg:block" /> App Today
          </h2>
        </div>
        <div className="flex gap-3 xl:hidden col-span-1">
          <AppleAppStoreButton size="small" />
          <GooglePlayButton size="small" />
        </div>

        {/* Rewards Section */}
        {rewardsData.map((reward) => (
          <div
            key={reward.title}
            className="flex flex-col xl:items-center xl:justify-center h-full col-span-1 lg:col-span-1"
          >
            <div className="flex items-center">
              {/*<div className="self-start">*/}
              <div className="rounded-full self-start mr-4">
                <reward.icon className="w-6 h-6 text-teal-500" />
              </div>
              {/*</div>*/}
              <div>
                <h3 className="font-semibold text-base text-dark">
                  {reward.title}
                </h3>
                <p className="text-muted text-sm">{reward.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* App Store Buttons */}
        <div className="hidden xl:flex flex-col gap-3 items-end">
          <AppleAppStoreButton size="small" />
          <GooglePlayButton size="small" />
        </div>
      </div>
    </div>
  );
};
