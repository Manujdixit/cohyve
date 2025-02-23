"use client";

import { Button } from "@/components/ui/button";
import { discoverimages } from "@/data/discover.images";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className={`min-h-screen flex flex-col`}>
      {/* Background with overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10" />

        <div className="w-full h-full overflow-hidden">
          <div className="w-full h-full flex flex-wrap justify-center gap-2 sm:gap-4  animate-slow-scroll">
            {discoverimages.map((item, index) => (
              <div
                key={item.id}
                className="relative group w-[45%] sm:w-48 md:w-64 aspect-[3/4] overflow-hidden rounded-lg"
                style={{
                  transform: `translateY(${index % 2 ? "10px" : "-10px"})`,
                  animation: `float ${
                    3 + (index % 2)
                  }s ease-in-out infinite alternate`,
                }}
              >
                <img
                  src={item.url}
                  alt="asdf"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-10px);
            }
          }

          @keyframes slow-scroll {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-50%);
            }
          }

          .animate-slow-scroll {
            animation: slow-scroll 120s linear infinite;
            will-change: transform;
          }
        `}</style>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="max-w-[490px] h-12 mt-[45px] mx-auto px-4 py-6 flex items-center justify-between bg-[#2e2e2e] border-[0.5px] border-white/10 rounded-[20px]">
          <div className="flex items-center gap-8 ">
            <Link href="/" className="text-white flex items-center ">
              <span className="text-2xl">✧</span>
              <span className="ml-2">comet</span>
            </Link>
            <div className="hidden md:flex gap-6">
              <Link
                href="/manifesto"
                className="text-white hover:text-white/80"
              >
                Manifesto
              </Link>
              <Link href="/discover" className="text-white hover:text-white/80">
                Discover
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-2">
            <Button
              variant="outline"
              className="text-white hover:text-white/80 bg-transparent hover:text-black"
            >
              Login
            </Button>
            <Button className="bg-[#f4f1e8] text-black hover:bg-[#f4f1e8]/90">
              Signup
            </Button>
          </div>
        </nav>

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

        {/* Footer */}
        <footer className="w-screen mx-auto px-8 py-6 mt-auto flex justify-between items-center">
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white/80"
            >
              Dark
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white/80"
            >
              Night
            </Button>
          </div>
          <div className="flex gap-6">
            <Link
              href="/marketplace"
              className="text-white hover:text-white/80"
            >
              Marketplace
            </Link>
            <Link href="/create" className="text-white hover:text-white/80">
              Create your site
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
