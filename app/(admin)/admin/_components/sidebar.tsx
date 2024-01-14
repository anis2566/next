"use client";

import { SIDEBAR_NAV } from "@/constant";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SideBar = () => {
  const [openNav, setOpenNav] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    SIDEBAR_NAV.forEach((navItem) => {
      if (navItem.children) {
        initialState[navItem.label] = false;
      }
    });
    return initialState;
  });

  const pathname = usePathname();

  const toggleNav = (label: string): void => {
    setOpenNav((prevOpenNav) => ({
      ...prevOpenNav,
      [label]: !prevOpenNav[label],
    }));
  };

  return (
    <aside
      id="logo-sidebar"
      className="sticky top-0 left-0 z-40 w-64 h-screen pt-20  bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700 hidden md:flex"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 w-full">
        <ul className="space-y-2 font-medium ">
          {SIDEBAR_NAV.map((nav, i) => {
            if (!nav.children) {
              return (
                <li key={i} className="">
                  <Link
                    href={nav.href}
                    className={cn(
                      "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                      pathname === nav.href && "bg-gray-100 dark:bg-gray-700"
                    )}
                  >
                    <nav.Icon
                      className={cn(
                        "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                        pathname === nav.href && "text-gray-900 dark:text-white"
                      )}
                    />
                    <span className="ms-3">{nav.label}</span>
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={i}>
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-300 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                    onClick={() => toggleNav(nav.label)}
                  >
                    <nav.Icon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      {nav.label}
                    </span>
                    {openNav[nav.label] ? (
                      <ChevronUp className="text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    ) : (
                      <ChevronDown className="text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    )}
                  </button>
                  <div
                    className={cn("space-y-0 transition-all duration-300", {
                      hidden: !openNav[nav.label],
                    })}
                  >
                    {nav.children.map((child, i) => (
                      <Link
                        href={child.href}
                        key={i}
                        className={cn(
                          "flex items-center gap-2 w-full p-2 text-gray-900 transition duration-300 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                          pathname === child.href &&
                            "bg-gray-100 dark:bg-gray-700"
                        )}
                      >
                        <child.Icon className="h-4 w-4" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
