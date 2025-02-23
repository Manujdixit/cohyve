"use client";

import {
  Bell,
  Filter,
  MessageSquarePlus,
  Palette,
  Send,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { discoverimages } from "@/data/discover.images";
import Masonry from "react-masonry-css";
import SearchDialog from "@/components/Search";
import { useRef, useState, useEffect, useMemo } from "react";

export default function DiscoverPage() {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Replace the random height generation with a deterministic approach
  const imageHeights = useMemo(() => {
    return discoverimages.map((_, index) => {
      // Use a predictable height based on the index
      const baseHeight = 350;
      const variation = (index % 3) * 50; // This will cycle through 0, 50, 100
      return baseHeight + variation;
    });
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const breakpointColumns = {
    default: 5, // Default for large screens
    1536: 4, // Screens >= 1536px
    1280: 3, // Screens >= 1280px
    1024: 2, // Screens >= 1024px
    768: 2, // Screens >= 768px
    640: 1, // Screens >= 640px (mobile)
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      {/* Navigation */}
      <nav className="sticky top-5 z-50 bg-[#0c0c0c]/80 backdrop-blur-sm">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex h-16 items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-8">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl">✧</span>
                <span>comet</span>
              </Link>
              <Button
                variant="ghost"
                className="hidden sm:inline-flex relative bg-gradient-to-r from-[#1e1e1e] to-[#2a2a2a] text-white hover:text-white/90"
              >
                Upgrade
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
              </Button>
              <div className="hidden md:flex gap-6">
                <Link href="/home" className="text-white/60 hover:text-white">
                  Home
                </Link>
                <Link
                  href="/discover"
                  className="text-white hover:text-white/90"
                >
                  Discover
                </Link>
              </div>
            </div>

            {/* Search */}
            <div
              className="hidden sm:flex flex-1 max-w-xs relative"
              ref={searchRef}
            >
              <Sparkles className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500 fill-lime-400" />
              <Input
                className="w-full bg-[#1b1b1b] border-0 pl-10 rounded-3xl placeholder:text-gray-500 focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0"
                placeholder="Try 'Traditional Pottery'"
                onClick={() => setShowSearch(true)}
              />
              <Palette className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
              {showSearch && (
                <div className="absolute top-full left-0 right-0 mt-2 z-[60] bg-[#1b1b1b] rounded-lg shadow-lg border border-white/10">
                  <SearchDialog />
                </div>
              )}
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:inline-flex"
              >
                <MessageSquarePlus className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:inline-flex"
              >
                <Send className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Filter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-purple-500"
              >
                <span className="sr-only">Profile</span>😊
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-4 pt-16">
        <div className="flex gap-4 justify-center">
          <Button
            variant="ghost"
            className="relative bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            For You
            <span className="ml-2 rounded bg-purple-500/20 px-1.5 py-0.5 text-xs text-purple-300">
              Beta
            </span>
          </Button>
          <Button variant="ghost" className="text-white/60 hover:text-white">
            Following
          </Button>
        </div>
      </div>

      {/* Grid */}
      <main className="container mx-auto px-4 py-8">
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {discoverimages.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden  bg-white/5 mb-4"
              style={{ height: `${imageHeights[index]}px` }}
            >
              <Image
                src={item.url}
                alt="Creative work"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </Masonry>
      </main>
    </div>
  );
}
