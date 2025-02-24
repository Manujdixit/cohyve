import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="max-w-[490px] h-12 mt-[45px] mx-auto px-4 py-6 flex items-center justify-between bg-[#2e2e2e] border-[0.5px] border-white/10 rounded-[20px]">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-white flex items-center">
          <span className="text-2xl">✧</span>
          <span className="ml-2">comet</span>
        </Link>
        <div className="hidden md:flex gap-4">
          <Link href="/manifesto" className="text-white hover:text-white/80">
            Manifesto
          </Link>
          <Link href="/discover" className="text-white hover:text-white/80">
            Discover
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2 ml-5">
        <Button
          size="sm"
          variant="outline"
          className="text-white hover:text-white/80 bg-transparent hover:text-black"
        >
          Login
        </Button>
        <Button
          size="sm"
          className="bg-[#f4f1e8] text-black hover:bg-[#f4f1e8]/90"
        >
          Signup
        </Button>
      </div>
    </nav>
  );
}
