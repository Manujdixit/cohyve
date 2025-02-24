import Image from "next/image";
import { discoverimages } from "@/data/discover.images";

interface ScrollingImageColumnProps {
  direction: "up" | "down";
  className?: string;
  startIndex?: number;
}

export function ScrollingImageColumn({
  direction,
  className = "",
  startIndex = 0,
}: ScrollingImageColumnProps) {
  const animationClass =
    direction === "up" ? "animate-scroll-up" : "animate-scroll-down";

  // Rotate the array to start from the specified index
  const rotatedImages = [
    ...discoverimages.slice(startIndex),
    ...discoverimages.slice(0, startIndex),
  ];

  return (
    <div className={`col-span-1 ${animationClass} ${className}`}>
      {[...rotatedImages, ...rotatedImages].map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="relative group w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 sm:mb-4"
        >
          <Image
            src={item.url}
            alt={item.id.toString()}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
