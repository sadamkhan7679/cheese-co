import { Button } from "@/components/ui/button";
import Image from "next/image";

const collectionsData = [
  {
    image: "/images/home/collections/cheese-collections.webp",
    title: "Cheese",
  },
  {
    image: "/images/home/collections/cheese-collections.webp",
    title: "Specialty Foods",
  },
  {
    image: "/images/home/collections/cheese-collections.webp",
    title: "Charcuterie",
  },
  {
    image: "/images/home/collections/cheese-collections.webp",
    title: "Houseware &  Accessories",
  },
];

export const Collections = () => {
  return (
    <div className="app-container">
      <div className="flex justify-between">
        <h1 className="text-2xl font-playfair">Explore Collections</h1>
        <Button
          variant="link"
          className="text-secondary underline underline-offset-2 text-base font-semibold cursor-pointer"
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {collectionsData.map((collection) => (
          <div
            key={collection.title}
            className="flex flex-col items-center rounded-t-2xl overflow-hidden relative h-42 w-full"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              className="h-42 w-full object-cover"
              sizes="25vw"
              fill
            />
            <div className="border border-border rounded-b-2xl py-4 w-full text-center">
              <h2 className="text-xl font-semibold">{collection.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
