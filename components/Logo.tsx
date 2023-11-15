import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex p-1">
        <Image
          src="/favicon.ico"
          alt="Logo"
          height={28}
          width={28}
          className="bg-neutral-700 p-[2px] rounded-full"
        />
        <p className={cn("text-lg text-neutral-700", textFont.className)}>
          Swiftboard
        </p>
      </div>
    </Link>
  );
};

export default Logo;
