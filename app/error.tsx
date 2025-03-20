"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
      <div className="mb-8">
        <span className="font-serif font-bold text-6xl text-red-500">
          Oops!
        </span>
      </div>

      <div className="relative w-48 h-48 mb-8">
        <Image
          src="/placeholder.svg?height=192&width=192"
          alt="Broken cheese grater"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="font-serif font-bold text-3xl md:text-4xl mb-4">
        Something went wrong
      </h1>

      <p className="text-gray-600 max-w-md mb-8">
        We apologize for the inconvenience. Our team has been notified and is
        working to fix the issue as quickly as possible.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <Button
          onClick={() => reset()}
          className="bg-amber-500 hover:bg-amber-600"
        >
          <RefreshCcw className="mr-2 h-4 w-4" />
          Try Again
        </Button>

        <Button asChild variant="outline">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="border-t border-gray-200 pt-8 text-sm text-gray-500">
        <p>Error Code: {error.digest || "Unknown"}</p>
        <p className="mt-2">
          If this problem persists, please{" "}
          <Link href="/contact" className="text-amber-500 hover:underline">
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
