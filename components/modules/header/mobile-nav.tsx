"use client";
import Link from "next/link";
import { Home, ShoppingBag, Gift, MapPin, User } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Subcategory = {
  name: string;
  items: string[];
};

type Category = {
  id: string;
  name: string;
  subcategories: Subcategory[];
};

export default function MobileNav({ categories }: { categories: Category[] }) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5" />
          <div>
            <Link href="/sign-in" className="text-sm font-medium">
              Sign In
            </Link>
            {" / "}
            <Link href="/sign-up" className="text-sm font-medium">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-3">
          <MapPin className="h-5 w-5" />
          <div className="text-sm">
            <div className="text-muted-foreground">Delivery to:</div>
            <div>Boca Raton, FL 33496</div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <nav>
          <Link href="/" className="flex items-center p-4 hover:bg-gray-50">
            <Home className="mr-3 h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            href="/best-seller"
            className="flex items-center p-4 hover:bg-gray-50 border-t"
          >
            <ShoppingBag className="mr-3 h-5 w-5" />
            <span>Best Seller</span>
          </Link>
          <Link
            href="/sale"
            className="flex items-center p-4 hover:bg-gray-50 border-t"
          >
            <span className="mr-3 text-red-500 font-medium">%</span>
            <span>Sale</span>
          </Link>

          {/* Categories with nested accordions */}
          <Accordion type="multiple" className="w-full">
            {categories.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border-t"
              >
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center">
                    <span className="mr-3">
                      {category.id === "cheese" && "🧀"}
                      {category.id === "charcuterie" && "🥓"}
                      {category.id === "specialty-foods" && "🍽️"}
                      {category.id === "housewares" && "🏠"}
                      {category.id === "accessories" && "🧰"}
                      {category.id === "gift-boxes" && (
                        <Gift className="h-5 w-5" />
                      )}
                    </span>
                    <span>{category.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="multiple" className="w-full">
                    {category.subcategories.map((subcategory, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.id}-${index}`}
                        className="border-t"
                      >
                        <AccordionTrigger className="px-4 py-2 hover:bg-gray-50 text-sm">
                          {subcategory.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="py-1">
                            {subcategory.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  href={`/${category.id}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="block px-8 py-2 text-sm hover:bg-gray-50"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </nav>
      </div>
    </div>
  );
}
