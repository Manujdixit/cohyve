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
          <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
            <div className="col-span-1 animate-scroll-up">
              {[...discoverimages, ...discoverimages].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="relative group w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 sm:mb-4"
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
            <div className="col-span-1 animate-scroll-down">
              {[...discoverimages, ...discoverimages].map((item, index) => (
                <div
                  key={`${item.id}-${index}-2`}
                  className="relative group w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 sm:mb-4"
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
            <div className="hidden sm:block col-span-1 animate-scroll-up">
              {[...discoverimages, ...discoverimages].map((item, index) => (
                <div
                  key={`${item.id}-${index}-3`}
                  className="relative group w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 sm:mb-4"
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
            <div className="hidden md:block col-span-1 animate-scroll-down">
              {[...discoverimages, ...discoverimages].map((item, index) => (
                <div
                  key={`${item.id}-${index}-4`}
                  className="relative group w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 sm:mb-4"
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
            <div className="hidden lg:block col-span-1 animate-scroll-up">
              {[...discoverimages, ...discoverimages].map((item, index) => (
                <div
                  key={`${item.id}-${index}-5`}
                  className="relative group w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 sm:mb-4"
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
            <div className="hidden md:block col-span-1 animate-scroll-down">
              {[...discoverimages, ...discoverimages].map((item, index) => (
                <div
                  key={`${item.id}-${index}-4`}
                  className="relative group w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 sm:mb-4"
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
        </div>

        <style jsx>{`
          @keyframes scroll-up {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes scroll-down {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }

          .animate-scroll-up {
            animation: scroll-up 120s linear infinite;
            will-change: transform;
          }

          .animate-scroll-down {
            animation: scroll-down 120s linear infinite;
            will-change: transform;
          }
        `}</style>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="max-w-[490px] h-12 mt-[45px] mx-auto px-4 py-6 flex items-center justify-between bg-[#2e2e2e] border-[0.5px] border-white/10 rounded-[20px]">
          <div className="flex items-center gap-4 ">
            <Link href="/" className="text-white flex items-center ">
              <span className="text-2xl">✧</span>
              <span className="ml-2">comet</span>
            </Link>
            <div className="hidden md:flex gap-4">
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
          <div className="flex items-center gap-2 ml-5">
            <Button
            size={"sm"}
              variant="outline"
              className="text-white hover:text-white/80 bg-transparent hover:text-black"
            >
              Login
            </Button>
            <Button size={"sm"} className="bg-[#f4f1e8] text-black hover:bg-[#f4f1e8]/90">
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

