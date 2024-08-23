"use client";
import Image from "next/image";
import React from "react";
import "./header.css";
import { CiHeart, CiSearch, CiMenuBurger, CiUser } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import HeaderUpperText from "./HeaderUpperText";
import { NotifyToast } from "@/components/utility/NotifyToast";
import { SlArrowDown } from "react-icons/sl";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="header">
      {/* Header Upper Part */}
      {/* Mobile only */}
      <div className="header_upper_container_mobile">
        <HeaderUpperText />
      </div>
      <div className="header_upper_container">
        <HeaderUpperText />
        <HeaderUpperText />
        <HeaderUpperText />
      </div>

      {/* Header Lower Part */}
      <div className="header_lower_container">
        <div className="header_lower_container_left">
          <CiMenuBurger
            cursor={"pointer"}
            size={30}
            className="menu"
            onClick={NotifyToast()}
          />
          <Image
            width={25}
            height={25}
            src="/logo.png"
            alt="logo"
            className="logo"
            onClick={() => router.push("/")}
          />
        </div>

        <h2 className="logo_text">LOGO</h2>

        <div className="header_lower_container_right">
          <CiSearch size={30} cursor={"pointer"} onClick={NotifyToast()} />
          <CiHeart size={30} cursor={"pointer"} onClick={NotifyToast()} />
          <IoBagCheckOutline
            size={30}
            cursor={"pointer"}
            onClick={NotifyToast()}
          />
          <CiUser size={30} className="profile" onClick={NotifyToast()} />
          <div className="lang_change" onClick={NotifyToast()}>
            <p>Eng</p>
            <SlArrowDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
