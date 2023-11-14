import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";
import Link from "next/link";
import React from "react";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-2xl md:text-5xl text-center text-neutral-700 mb-6">
          Ready to elevate your project management game?
        </h1>
        <div className="text-2xl md:text-5xl text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          SwiftBoard is here to make it happen.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto"
        )}
      >
        Streamline your workflow, enhance collaboration, and achieve
        unparalleled productivity with SwiftBoard&apos;s innovative features.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Swiftboard for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
