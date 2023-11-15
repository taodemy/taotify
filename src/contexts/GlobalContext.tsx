import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the types for the context
interface GlobalContextProps {
  likedSongsIdList: string[];
  setLikedSongsIdList: React.Dispatch<React.SetStateAction<string[]>>;
}

// Create a new context
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

// Create a provider component
export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [likedSongsIdList, setLikedSongsIdList] = useState<string[]>([]);

  return (
    <GlobalContext.Provider value={{ likedSongsIdList, setLikedSongsIdList }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Create a custom hook for using the global context
export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
};
