"use client";

// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ChevronDown, Phone } from "lucide-react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    setShowMenu(false);
    setShowDropdown(false);
    return () => {
      if (dropdownTimeout.current) {
        clearTimeout(dropdownTimeout.current);
      }
    };
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dropdownTimeout.current = setTimeout(() => {
      setShowDropdown(false);
    }, 150); // Small delay before hiding the dropdown
  };

  return (
    <nav className="sticky top-10 z-50 container mx-auto rounded-full backdrop-blur-xl bg-white/30">
      <div className="max-w-[1800px]">
        <div className="flex items-center justify-between px-8 py-4 text-base">
          <div>
            <Link href="/" aria-label="SolarTech">
              <p className="text-3xl font-bold text-primary">SolarTech</p>
              {/* <Image
                width={120}
                height={28}
                src="/images/solartech-logo.svg"
                alt="logo"
                priority={true}
              /> */}
            </Link>
          </div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="block cursor-pointer text-[#fab300] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>
          </div>
          <ul className="hidden items-center gap-9 text-[#1a212d] lg:flex">
            <li>
              <Link href="/solar-panels">
                <p
                  className={`${
                    pathname === "/solar-panels"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base`}
                >
                  Solar Panels
                </p>
              </Link>
            </li>
            <li>
              <Link href="/batteries">
                <p
                  className={`${
                    pathname === "/batteries"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base`}
                >
                  Batteries
                </p>
              </Link>
            </li>
            <li>
              <Link href="/references">
                <p
                  className={`${
                    pathname === "/references"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base`}
                >
                  References
                </p>
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`flex items-center gap-1 cursor-pointer ${
                  pathname === "/about-us" ||
                  pathname === "/contact" ||
                  pathname === "/privacy-policy"
                    ? "text-[#fab300]"
                    : "text-[#1a212d]"
                } text-base`}
              >
                <p>About SolarTech</p>
                <ChevronDown className="w-4 h-4" />
              </div>
              {showDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/about-us">
                    <p
                      className={`${
                        pathname === "/about-us"
                          ? "text-[#fab300]"
                          : "text-[#1a212d]"
                      } text-base px-4 py-2 hover:bg-gray-100`}
                    >
                      About Us
                    </p>
                  </Link>
                  <Link href="/contact">
                    <p
                      className={`${
                        pathname === "/contact"
                          ? "text-[#fab300]"
                          : "text-[#1a212d]"
                      } text-base px-4 py-2 hover:bg-gray-100`}
                    >
                      Contact
                    </p>
                  </Link>
                  <Link href="/privacy-policy">
                    <p
                      className={`${
                        pathname === "/privacy-policy"
                          ? "text-[#fab300]"
                          : "text-[#1a212d]"
                      } text-base px-4 py-2 hover:bg-gray-100`}
                    >
                      Privacy Policy
                    </p>
                  </Link>
                </div>
              )}
            </li>
          </ul>
          <Link href="/contact" className="hidden lg:block">
            <Button className="bg-black text-white hover:bg-gray-600 rounded-full px-5">
              Contact
              <Phone className="h-4 w-4 ml-2 text-white" />
            </Button>
          </Link>
        </div>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } w-full bg-white shadow-lg lg:hidden`}
        >
          <ul className="flex flex-col gap-4 p-4 text-[#1a212d]">
            <li>
              <Link href="/solar-panels">
                <p
                  className={`${
                    pathname === "/solar-panels"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Solar Panels
                </p>
              </Link>
            </li>
            <li>
              <Link href="/batteries">
                <p
                  className={`${
                    pathname === "/batteries"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Batteries
                </p>
              </Link>
            </li>
            <li>
              <Link href="/references">
                <p
                  className={`${
                    pathname === "/references"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  References
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <p
                  className={`${
                    pathname === "/about-us"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  About Us
                </p>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/contact">
                <p
                  className={`${
                    pathname === "/contact"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Contact
                </p>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/privacy-policy">
                <p
                  className={`${
                    pathname === "/privacy-policy"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Privacy Policy
                </p>
              </Link>
            </li>
            <li>
              <Button className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full">
                Contact
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
