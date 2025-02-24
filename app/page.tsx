"use client";

import { Button } from "@/components/ui/button";
import { ScrollingImageColumn } from "@/components/ScrollingImageColumn";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "@/app/styles/animations.css";

export default function Page() {
  return (
    <div className={`min-h-screen max-h-screen flex flex-col`}>
      {/* Background with overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10" />

        <div className="w-full h-full overflow-hidden">
          <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
            <ScrollingImageColumn direction="up" />
            <ScrollingImageColumn direction="down" />
            <ScrollingImageColumn direction="up" className="hidden sm:block" />
            <ScrollingImageColumn
              direction="down"
              className="hidden md:block"
            />
            <ScrollingImageColumn direction="up" className="hidden lg:block" />
            <ScrollingImageColumn
              direction="down"
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <main className="container mx-auto px-4 flex-grow flex flex-col items-center justify-center">
          <h1 className="font-two text-5xl md:text-7xl lg:text-8xl text-white mb-6">
            Made for Creatives
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-12">
            A discovery engine for creatives
          </p>
          <Button className="bg-[#f4f1e8] text-black hover:bg-[#f4f1e8]/90 text-md font-semibold px-8 py-6">
            Get Inspired
          </Button>
        </main>

        <Footer />
      </div>
    </div>
  );
}
