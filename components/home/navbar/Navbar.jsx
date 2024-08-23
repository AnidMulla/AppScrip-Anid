"use client";
import React from "react";
import "./navbar.css";
import { Divider } from "@/components/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NotifyToast } from "@/components/utility/NotifyToast";

const navItems = [
  { name: "Shop", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="nav_list">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              className={
                pathname === item.path ? "activeLink nav_item" : "nav_item"
              }
              href={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Divider />
    </nav>
  );
};

export default Navbar;
