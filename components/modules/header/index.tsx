"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchDropdown from "./search-dropdown";
import CartSheet from "./cart-sheet";
import MobileNav from "./mobile-nav";
import CategoryDropdown from "./category-dropdown";
import { HeaderLogo } from "@/components/ui/header-logo";
import { DeliveryIcon } from "@/icon/common/delivery";
import { CartIcon } from "@/icon/common/cart";

// Define category data with nested subcategories
const categories = [
  {
    id: "cheese",
    name: "Cheese",
    subcategories: [
      {
        name: "By Type",
        items: [
          "Soft Cheese",
          "Hard Cheese",
          "Blue Cheese",
          "Fresh Cheese",
          "Goat Cheese",
        ],
      },
      {
        name: "By Country",
        items: ["French", "Italian", "Spanish", "Swiss", "English", "American"],
      },
      {
        name: "By Milk",
        items: ["Cow", "Goat", "Sheep", "Mixed Milk"],
      },
      {
        name: "Featured",
        items: [
          "New Arrivals",
          "Best Sellers",
          "Award Winners",
          "Artisanal Selection",
        ],
      },
    ],
  },
  {
    id: "charcuterie",
    name: "Charcuterie",
    subcategories: [
      {
        name: "Cured Meats",
        items: ["Prosciutto", "Salami", "Chorizo", "Coppa", "Pancetta"],
      },
      {
        name: "Pâtés & Terrines",
        items: [
          "Duck Pâté",
          "Chicken Liver",
          "Country Terrine",
          "Vegetable Terrine",
        ],
      },
      {
        name: "By Country",
        items: ["Italian", "Spanish", "French", "German"],
      },
    ],
  },
  {
    id: "specialty-foods",
    name: "Specialty Foods",
    subcategories: [
      {
        name: "Accompaniments",
        items: [
          "Crackers",
          "Jams & Preserves",
          "Honey",
          "Mustards",
          "Pickles & Olives",
        ],
      },
      {
        name: "Oils & Vinegars",
        items: [
          "Olive Oil",
          "Flavored Oils",
          "Balsamic Vinegar",
          "Wine Vinegar",
        ],
      },
      {
        name: "Pasta & Grains",
        items: ["Artisanal Pasta", "Risotto", "Polenta", "Couscous"],
      },
      {
        name: "Sweets",
        items: ["Chocolate", "Cookies", "Candies", "Dessert Sauces"],
      },
    ],
  },
  {
    id: "housewares",
    name: "Housewares",
    subcategories: [
      {
        name: "Serving",
        items: [
          "Cheese Boards",
          "Serving Platters",
          "Cheese Knives",
          "Utensils",
        ],
      },
      {
        name: "Kitchen Tools",
        items: ["Graters", "Slicers", "Cooking Utensils", "Measuring Tools"],
      },
      {
        name: "Storage",
        items: ["Cheese Storage", "Food Containers", "Wine Racks"],
      },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    subcategories: [
      {
        name: "Tabletop",
        items: ["Napkins", "Placemats", "Coasters", "Table Runners"],
      },
      {
        name: "Textiles",
        items: ["Kitchen Towels", "Aprons", "Oven Mitts"],
      },
      {
        name: "Books",
        items: ["Cookbooks", "Cheese Guides", "Wine Pairing"],
      },
    ],
  },
  {
    id: "gift-boxes",
    name: "Gift Boxes",
    subcategories: [
      {
        name: "By Occasion",
        items: [
          "Birthday",
          "Anniversary",
          "Thank You",
          "Housewarming",
          "Corporate",
        ],
      },
      {
        name: "By Size",
        items: ["Small", "Medium", "Large", "Custom"],
      },
      {
        name: "By Theme",
        items: [
          "Cheese Lover",
          "Wine & Cheese",
          "Gourmet Sampler",
          "Regional Specialties",
        ],
      },
    ],
  },
];

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full">
      {/* Free delivery banner */}
      <div className="w-full bg-secondary text-white text-center py-2 text-sm">
        Free Delivery on Orders over $200*
      </div>

      {/* Main header */}
      <div className="mx-auto px-5 md:px-10 xl:app-container-w py-2 flex items-center justify-between">
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 18.5H23.5M1 10H18M1 1.5H23.5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <MobileNav categories={categories} />
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="" aria-label="Cheese-Co-Logo">
          <HeaderLogo />
        </Link>
        {/*<Link href="/" className="flex items-center">*/}
        {/*  <span className="font-bold text-xl">Cheese</span>*/}
        {/*  <span className="text-xl text-muted-foreground">CO.</span>*/}
        {/*</Link>*/}

        <div className="flex items-center gap-4 flex-1 lg:ml-4 w-full">
          {/* Search */}
          <div
            className="hidden lg:flex relative flex-1 max-w-2xl"
            ref={searchRef}
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="What are you looking for"
                className="pl-10 pr-4 h-12 w-full rounded-lg border-border-dark"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onClick={() => setIsSearchOpen(true)}
              />
            </div>
            {isSearchOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 z-50">
                <div className="bg-white rounded-md shadow-lg border">
                  <SearchDropdown query={searchQuery} />
                </div>
              </div>
            )}
            {/* Delivery location */}
          </div>
          <div className="hidden lg:flex items-center gap-2 text-xs rounded-lg border border-border h-12 px-4">
            <DeliveryIcon />
            <div className="flex flex-col">
              <span className="text-muted-foreground">Delivery to:</span>
              <span className="font-medium">Boca Raton, FL 33496</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Auth buttons */}
          {/*<div className="hidden lg:flex items-center gap-2">*/}
          <Button variant="ghost" size="sm" className="text-sm hidden lg:flex">
            Sign In
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-sm border border-border-dark px-4 hidden lg:flex"
          >
            Sign Up
          </Button>
          {/*</div>*/}

          {/* Cart */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="relative h-10 py-2 px-4 rounded-lg bg-secondary">
                <CartIcon className="h-7 w-7" />
                <span className="absolute bottom-0 right-1 bg-amber-500 text-dark text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  4
                </span>
                <span className="sr-only">Open cart</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="p-0 w-full sm:max-w-md rounded-lg"
            >
              <CartSheet />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-200 hidden lg:block">
        <div className="app-container-w py-2">
          <ul className="flex justify-between xl:px-36">
            <li>
              <Link
                href="/best-seller"
                className="block py-3 font-medium text-sm"
              >
                Best Seller
              </Link>
            </li>
            <li>
              <Link href="/sale" className="block py-3 font-medium text-sm">
                Sale
              </Link>
            </li>

            {/* Categories with dropdowns */}
            {categories.map((category) => (
              <li key={category.id} className="relative group">
                <CategoryDropdown category={category} />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile search */}
      <div className="lg:hidden app-container-w py-2" ref={searchRef}>
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="What are you looking for"
            className="pl-10 pr-4 h-12 w-full rounded-lg border-border-dark"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchOpen(true)}
            onClick={() => setIsSearchOpen(true)}
          />
        </div>
        {isSearchOpen && (
          <div className="absolute left-4 right-4 mt-1 z-50">
            <div className="bg-white rounded-md shadow-lg border">
              <SearchDropdown
                query={searchQuery}
                onClose={() => setIsSearchOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
