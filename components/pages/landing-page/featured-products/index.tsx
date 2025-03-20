"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "@/components/modules/products/product-card";
import { GiftBoxIcon } from "@/icon/common/giftbox";

// Sample product data
const products = [
  {
    id: "1",
    name: "Brie aux Truffes",
    price: 10.0,
    image: "/images/home/products/cheese.webp",
    origin: "France",
    sale: false,
  },
  {
    id: "2",
    name: "Brie aux Truffes",
    price: 10.0,
    image: "/images/home/products/cheese.webp",
    origin: "France",
    sale: false,
  },
  {
    id: "3",
    name: "Brie aux Truffes",
    price: 10.0,
    image: "/images/home/products/cheese.webp",
    origin: "France",
    sale: false,
  },
  {
    id: "4",
    name: "Brie aux Truffes",
    price: 10.0,
    image: "/images/home/products/cheese.webp",
    origin: "France",
    stock: "low",
  },
  {
    id: "5",
    name: "Gouda Aged",
    price: 11.5,
    image: "/images/home/products/cheese.webp",
    origin: "Netherlands",
    sale: true,
    originalPrice: 13.99,
  },
  {
    id: "6",
    name: "Cheddar Reserve",
    price: 9.75,
    image: "/images/home/products/cheese.webp",
    origin: "UK",
    sale: false,
  },
  {
    id: "7",
    name: "Gruyère AOP",
    price: 15.25,
    image: "/images/home/products/cheese.webp",
    origin: "Switzerland",
    sale: false,
  },
  {
    id: "8",
    name: "Comté Aged 24 Months",
    price: 17.99,
    image: "/images/home/products/cheese.webp",
    origin: "France",
    stock: "low",
  },
];

export const FeaturedProducts = () => {
  return (
    <div className="app-container">
      <div className="flex items-center mb-6">
        <div className="mr-2">
          <GiftBoxIcon />
        </div>
        <h2 className="text-2xl font-playfair">Featured Cheese</h2>
        <Link href="/featured" className="ml-auto text-sm text-primary">
          View All
        </Link>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-2 md:pl-4 basis-1/2 lg:basis-1/4 pb-1"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/*<CarouselPrevious className="hidden md:flex -left-4 h-8 w-8" />*/}
        <CarouselNext className="hidden lg:flex top-1/3 -right-14 h-8 w-8" />
      </Carousel>
    </div>
  );
};
