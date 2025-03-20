"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, RefreshCcw } from "lucide-react";
import { openSans, cocogoose, playfair, playfairVariable } from "./fonts";

export default function GlobalError({
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
    <html
      lang="en"
      className={`${openSans.variable} ${cocogoose.variable} ${playfair.variable} ${playfairVariable.variable}`}
    >
      <body className="font-sans bg-white">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center min-h-screen">
          <div className="mb-8">
            <span className="font-serif font-bold text-6xl text-red-500">
              Critical Error
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl md:text-4xl mb-4">
            Something went seriously wrong
          </h1>

          <p className="text-gray-600 max-w-md mb-8">
            We've encountered a critical error that prevents the application
            from running properly. Our team has been automatically notified.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <Button
              onClick={() => reset()}
              className="bg-amber-500 hover:bg-amber-600 text-white"
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
              Please try refreshing the page or coming back later.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
