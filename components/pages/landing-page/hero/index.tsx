import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative h-[500px]">
      <Image
        src="/images/home/hero-bg-image.webp"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center">
        <div className="app-container">
          <div className="py-8 md:p-16 flex items-center">
            <div className="bg-white/90 rounded-2xl px-6 py-10 max-w-[560px]">
              <h2 className="text-primary-dark text-4xl italic mb-2">
                New Artisanal Cheese
              </h2>
              <h1 className="font-serif text-4xl md:text-5xl mb-4">
                Shopping and Tasting Experience in Ambleside
              </h1>
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                Start Shopping <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          {/*<div className="max-w-xl">*/}
          {/*  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">*/}
          {/*    <span className="text-orange-400">New: Artisanal Cheese</span>*/}
          {/*    <br />*/}
          {/*    Shopping and Tasting Experience in Ambleside*/}
          {/*  </h1>*/}
          {/*  <Button*/}
          {/*    size="lg"*/}
          {/*    className="bg-yellow-400 hover:bg-yellow-500 text-black"*/}
          {/*  >*/}
          {/*    Start Shopping <ArrowRight className="ml-2 h-4 w-4" />*/}
          {/*  </Button>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};
