import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home, Search, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
      <div className="mb-8">
        <span className="font-serif font-bold text-6xl text-amber-500">
          404
        </span>
      </div>

      <div className="relative w-48 h-48 mb-8">
        <Image
          src="/images/home/cheese-with-missing-slice.webp"
          alt="Cheese wheel with a slice missing"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="font-serif font-bold text-3xl md:text-4xl mb-4">
        Oops! This page has melted away
      </h1>

      <p className="text-gray-600 max-w-md mb-8">
        We can't seem to find the page you're looking for. It might have been
        moved, renamed, or is temporarily unavailable.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <Button asChild className="bg-amber-500 hover:bg-amber-600">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/best-seller">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Browse Best Sellers
          </Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/">
            <Search className="mr-2 h-4 w-4" />
            Search Products
          </Link>
        </Button>
      </div>

      <div className="border-t border-gray-200 pt-8 text-sm text-gray-500">
        <p>
          If you believe this is an error, please{" "}
          <Link href="/contact" className="text-amber-500 hover:underline">
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
