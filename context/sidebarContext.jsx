'use client'
import { useState } from "react";

const { createContext } = require("react");

export const SidebarContext = createContext();

export default function SidebarContextProvider({ children }) {
    const [isOpenSideBar, setIsOpenSidebar] = useState(false);
    return (
        <SidebarContext.Provider value={{ isOpenSideBar, setIsOpenSidebar }} >
            {children}
        </SidebarContext.Provider>
    )
}


