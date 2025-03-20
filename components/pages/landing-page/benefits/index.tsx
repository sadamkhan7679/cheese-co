import { MapPin, Truck, Users } from "lucide-react";
import { LocalPickupIcon } from "@/icon/benefits/local-pickup";
import { FastDeliveryIcon } from "@/icon/benefits/fresh-delivery";
import { LocalMakersIcon } from "@/icon/benefits/local-makers";

const benefitsList = [
  {
    label: "Easy Local Pickup",
    description: "Grab your order at a nearby location, hassle-free.",
    icon: LocalPickupIcon,
  },
  {
    label: "Fresh Cheese, Delivered",
    description: "Premium, artisan cheeses shipped straight to your door.",
    icon: FastDeliveryIcon,
  },
  {
    label: "Support Local Makers",
    description: "Sourced from top cheesemakers for the best quality.",
    icon: LocalMakersIcon,
  },
];

export const Benefits = () => {
  return (
    <div className="bg-surface">
      <div className="app-container grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-lg">
        {benefitsList.map(({ label, description, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Icon className="" />
            </div>
            <h3 className="text-2xl font-playfair mb-1">{label}</h3>
            <p className="text-base text-muted-foreground max-w-64">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
