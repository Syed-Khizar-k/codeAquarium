"use client";
import React, { createContext, useState, } from "react";
import {AppContextType} from "@/interFace/interFace";
export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [niceSelectData, setNiceSelectData] = useState<string>("no-data");
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number>(0);
  const [showSidebarWishlist, setShowSidebarWishlist] =
    useState<boolean>(false);
  const [openWishlist, setOpenWishlist] = useState<boolean>(false);
  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const contextValue: AppContextType = {
    sideMenuOpen,
    setSideMenuOpen,
    toggleSideMenu,
    scrollDirection,
    setScrollDirection,
    showSidebar,
    setShowSidebar,
    openCart,
    setOpenCart,
    toggleModal,
    openModal,
    setOpenModal,
    niceSelectData, setNiceSelectData,
    showSidebarWishlist,
    setShowSidebarWishlist,
    openWishlist,
    setOpenWishlist,
    modalId, setModalId
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
