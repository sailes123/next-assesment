"use client";
import { ReactNode, useState } from "react";
import AppContext from "./AppContext";
      

type SearchContextProps = {
        children: ReactNode;
}

const AppContextProvider = ({children}:SearchContextProps) => {
        const [searchQuery,setSearchQuery] = useState('')
  return (
    <AppContext.Provider value={{searchQuery,setSearchQuery}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider