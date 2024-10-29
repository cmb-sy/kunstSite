"use client";

import { useState, useEffect } from "react";
import { navigationItems } from "./HeaderItem";
import { smoothScroll } from "./smoothScroll";

function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    let scrollingTimer: number;

    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        (header as HTMLElement).style.opacity = "0.5";
        clearTimeout(scrollingTimer);
        scrollingTimer = window.setTimeout(() => {
          (header as HTMLElement).style.opacity = "1";
        }, 200);
      }
    };

    const mediaQuery = window.matchMedia("(max-width: 600px)");

    if (mediaQuery.matches) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    mediaQuery.addEventListener("change", (e) => {
      if (e.matches) {
        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", (e) => {
        if (e.matches) {
          window.removeEventListener("scroll", handleScroll);
        } else {
          window.removeEventListener("scroll", handleScroll);
        }
      });
    };
  }, []);

  return (
    <header className="fixed top-15 w-full bg-white shadow-md z-10">
      <nav className="flex justify-between items-center p-4 flex-col">
        <div className="flex-grow"></div>
        <ul
          className={`flex flex-col md:flex-row md:items-center md:gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-transform transform ${
            navActive ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } md:justify-center`}
        >
          {navigationItems.map((item) => (
            <li key={item.url} className="list-none">
              <a
                href={item.url}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(item.url);
                  toggleNav();
                }}
                className="block py-4 px-8 text-black no-underline hover:bg-gray-200 md:hover:bg-gray-300 text-center text-lg font-bold"
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-grow md:hidden"></div>
        <div className="md:hidden cursor-pointer" onClick={toggleNav}>
          <div
            className={`w-6 h-1 bg-black mb-1 transition-transform ${
              navActive ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-black mb-1 transition-opacity ${
              navActive ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-black transition-transform ${
              navActive ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
