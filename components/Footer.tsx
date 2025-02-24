import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
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
        <Link href="/marketplace" className="text-white hover:text-white/80">
          Marketplace
        </Link>
        <Link href="/create" className="text-white hover:text-white/80">
          Create your site
        </Link>
      </div>
    </footer>
  );
}
