import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

export const NewArrival = () => {
  return (
    <div className="app-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-border gap-6 rounded-lg overflow-hidden">
        <div className="flex flex-col justify-center px-16 py-18">
          <Badge className="w-fit mb-4 bg-primary">Just In</Badge>
          <h2 className="text-3xl lg:text-4xl text-black font-playfair mb-4">
            Munster Fermier
          </h2>
          <p className="text-muted-foreground mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <Button variant="outline" className="w-fit">
            Learn More
            <MoveRight />
          </Button>
        </div>
        <div className="relative aspect-square md:aspect-auto min-h-96">
          <Image
            src="/images/home/products/new-arrival.gif"
            alt="Munster Fermier cheese"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
