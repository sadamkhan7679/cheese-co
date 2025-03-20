import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <Loader2 className="h-12 w-12 text-amber-500 animate-spin mb-4" />
      <h2 className="text-xl font-serif font-medium text-gray-700">
        Loading...
      </h2>
      <p className="text-gray-500 mt-2">
        Preparing something delicious for you
      </p>
    </div>
  );
}
