"use client"
import navMenuData from "@/data/headernav/nav-menus";
import useGlobalContext from "@/hooks/use-context";
import Link from "next/link";
import React, { useState } from "react";
const MobileMenu = () => {
  const { sideMenuOpen, toggleSideMenu, setSideMenuOpen } = useGlobalContext();
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuId, setmenuId] = useState(0);
  const openMobileMenu = (menuLabel: number) => {
    setmenuId(menuLabel);
    setActiveMenu(!activeMenu);
  };
  return (
    <>
      <div
        className={sideMenuOpen ? "side-mobile-menu open" : "side-mobile-menu"}
      >
        <div className="close-mobile-menu" onClick={toggleSideMenu}>
          <Link href="">
            {" "}
            <i className="fal fa-times"></i>
          </Link>
        </div>
        <div className="mm-menu">
          <ul>
            {navMenuData.map((menuItem, index) => (
              <li
                key={index}
                className={
                  menuId === menuItem.id &&
                  menuItem.hasDropdown === true &&
                  activeMenu
                    ? "has-droupdown active"
                    : menuItem.hasDropdown === false
                    ? ""
                    : "has-droupdown"
                }
              >
                <Link
                  href={menuItem.subMenu ? "" : menuItem.link}
                  onClick={() => {
                    if (menuItem.subMenu) {
                      openMobileMenu(menuItem?.id);
                    } else {
                      setSideMenuOpen(!sideMenuOpen);
                    }
                  }}
                >
                  {menuItem.label}
                </Link>
                <ul
                  className={
                    menuId === menuItem.id ? "sub-menu active" : "sub-menu"
                  }
                >
                  {menuItem.subMenu?.length &&
                    menuItem.subMenu.map((subMenuItem, subIndex) => (
                      <li key={subIndex}>
                        <Link onClick={toggleSideMenu} href={subMenuItem.link}>
                          {subMenuItem.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
