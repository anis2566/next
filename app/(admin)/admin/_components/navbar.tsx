import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Bell } from "lucide-react";

import { ModeToggle } from "@/components/MoodToggle";
import BadgeWithIcon from "@/components/BadgeWithIcon";
import Drawer from "./drawer";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full max-w-7xl mx-auto bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <div className=" md:hidden">
              <Drawer />
            </div>
            <Link href="/admin/dashboard" className="flex ms-2 md:me-24">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white ml-2 hidden md:flex">
                Khayer Mart
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <ModeToggle />
            <BadgeWithIcon Icon={Bell} value={5} />
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
