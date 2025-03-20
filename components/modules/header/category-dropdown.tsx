"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Subcategory = {
  name: string;
  items: string[];
};

type Category = {
  id: string;
  name: string;
  subcategories: Subcategory[];
};

export default function CategoryDropdown({ category }: { category: Category }) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center py-3 font-medium text-sm focus:outline-none">
          {category.name}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[800px] grid grid-cols-4 p-6 gap-6"
      >
        {category.subcategories.map((subcategory, index) => (
          <div key={index} className="space-y-3">
            <h3 className="font-medium text-sm text-muted-foreground">
              {subcategory.name}
            </h3>
            <ul className="space-y-2">
              {subcategory.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    href={`/${category.id}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
