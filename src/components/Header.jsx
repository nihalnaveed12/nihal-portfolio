import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";

function Header() {
  const [navOpen, setOpenNav] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-5 flex justify-between items-center md:px-7 md:grid md:grid-cols-3">
        <h1>
          <a href="/" className="logo flex gap-2 items-center max-w-full text-lg">
            <img src="./images/coding.png" alt="Nihal Naveed" width={42} height={42} className="rounded-full"/>
            <h2>CodeWithNihal</h2>
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setOpenNav((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          className="max-md:hidden md:justify-self-end bg-zinc-50 text-zinc-900 px-4 h-9 flex items-center rounded-xl hover:scale-105 duration-500 ring-inset ring-1 ring-zinc-50/5 gap-2 transition[background-color] active:bg-zinc-400"
        >
          Contact me
        </a>
      </div>
    </header>
  );
}

export default Header;
