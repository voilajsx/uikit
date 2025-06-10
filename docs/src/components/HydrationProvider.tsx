import React, { createContext, useContext, useState, useEffect } from 'react';

const HydrationContext = createContext(false);

export function HydrationProvider({ children }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <HydrationContext.Provider value={isHydrated}>
      {children}
    </HydrationContext.Provider>
  );
}

export function useHydration() {
  return useContext(HydrationContext);
}