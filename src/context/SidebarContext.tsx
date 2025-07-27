import { createContext, useContext, useEffect, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}