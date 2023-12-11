"use client";
import React from "react";
import styles from "../constants/styles";
import { useState } from "react";
import { close, logo, menu } from "../public/assets";
import Link from "next/link";
import { navLinks } from "../constants";
import Image from "next/image";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-primary text-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
            <Image src={logo} alt="logo" className="w-[124px] h-[32px]" />
            <ul className="list-none hidden sm:flex justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal text-dimWhite text-[16px]
               hover:text-secondary cursor-pointer 
               ${index === navLinks.length ? "mr-0" : "mr-10"}`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center ">
              <Image
                src={toggleMenu ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggleMenu((prev) => !prev)}
              />
              <div
                className={`${
                  toggleMenu ? "flex" : "hidden"
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-normal text-dimWhite text-[16px]
               hover:text-secondary cursor-pointer 

               ${index === navLinks.length ? "mr-0" : "mb-4"}`}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
