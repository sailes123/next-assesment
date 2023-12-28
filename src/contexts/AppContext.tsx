import { createContext } from "react";

export interface SearchContextValue {
  searchQuery: string;
  setSearchQuery: any;
}

const defaultValue: SearchContextValue = {
  searchQuery: "",
  setSearchQuery: undefined,
};

const AppContext = createContext<any>(defaultValue);

export default AppContext;
