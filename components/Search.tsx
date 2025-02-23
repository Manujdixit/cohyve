"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TrendingUp } from "lucide-react";

export default function SearchDialog() {
  return (
    <div className="max-w-2xl p-6 bg-[#1b1b1b] border border-[#323232] rounded-2xl shadow-lg overflow-hidden">
      <div className="space-y-6">
        {/* Trending Section */}
        <div className="space-y-3">
          <h2 className="text-sm text-[#d9d9d9]">Trending</h2>
          <div className="flex  gap-2">
            {["romance", "wisdom", "branding", "Typography", "monogram"].map(
              (tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  className="h-8 px-4 rounded-full text-xs bg-[#242424] border-[#323232] text-[#d9d9d9] hover:bg-[#323232] shadow-sm"
                >
                  <TrendingUp />
                  {tag}
                </Button>
              )
            )}
          </div>
        </div>

        {/* Colors Section */}
        <div className="space-y-3">
          <h2 className="text-sm text-[#d9d9d9]">Colours</h2>
          <div className="flex gap-3">
            {["#4E4D4D", "#998BFE", "#A7FF71", "#FF3C70", "#FFE77B"].map(
              (color) => (
                <Button
                  key={color}
                  variant="outline"
                  className="h-8 px-4 rounded-full text-xs bg-[#242424] border-[#323232] text-[#d9d9d9] hover:bg-[#323232] shadow-sm"
                >
                  <TrendingUp />
                  <div
                    key={color}
                    className="size-4  cursor-pointer border-2 border-transparent hover:border-white transition"
                    style={{ backgroundColor: color }}
                  />
                  {color}
                </Button>
              )
            )}
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-3">
          <h2 className="text-sm text-[#d9d9d9]">Categories</h2>
          <div className="grid grid-cols-4 gap-3">
            {["Fashion", "Branding", "Packaging", "Typography"].map(
              (category) => (
                <div
                  key={category}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-md"
                >
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt={category}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-end p-2">
                    <span className="text-sm text-white font-medium">
                      {category}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
