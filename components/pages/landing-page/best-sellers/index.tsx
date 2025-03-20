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
    image: "/images/home/products/cheese.jpg",
    origin: "France",
    sale: false,
  },
  {
    id: "2",
    name: "Brie aux Truffes",
    price: 10.0,
    image: "/images/home/products/cheese.jpg",
    origin: "France",
    sale: false,
  },
  {
    id: "3",
    name: "Brie aux Truffes",
    price: 10.0,
    image: "/images/home/products/cheese.jpg",
    origin: "France",
    sale: false,
  },
  {
    id: "4",
    name: "Brie aux Truffes",
    price: 10.0,
    image: "/images/home/products/cheese.jpg",
    origin: "France",
    sale: false,
  },
  {
    id: "5",
    name: "Camembert de Normandie",
    price: 12.5,
    image: "/images/home/products/cheese.jpg",
    origin: "France",
    sale: true,
    originalPrice: 15.0,
  },
  {
    id: "6",
    name: "Manchego Aged",
    price: 14.99,
    image: "/images/home/products/cheese.jpg",
    origin: "Spain",
    sale: false,
  },
  {
    id: "7",
    name: "Parmigiano Reggiano",
    price: 18.75,
    image: "/images/home/products/cheese.jpg",
    origin: "Italy",
    sale: false,
  },
  {
    id: "8",
    name: "Roquefort AOP",
    price: 16.5,
    image: "/images/home/products/cheese.jpg",
    origin: "France",
    sale: true,
    originalPrice: 19.99,
  },
];

export const BestSellers = () => {
  return (
    <div className="app-container">
      <div className="flex items-center mb-6">
        <div className="mr-2">
          <GiftBoxIcon />
        </div>
        <h2 className="text-2xl font-playfair">Best Sellers</h2>
        <Link href="/best-sellers" className="ml-auto text-sm text-primary">
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
