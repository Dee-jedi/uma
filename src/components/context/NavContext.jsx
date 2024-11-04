import { createContext, useState, useEffect } from 'react';

const NavContext = createContext({});

export const NavContextProvider = ({ children }) => {
  const links = [
    { label: 'Overview', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Plans', href: '#plans' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => setIsMenuOpen(!isMenuOpen);
  const closeSidebar = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      // Close sidebar if screen width reaches or exceeds the `sm` breakpoint (640px)
      if (window.innerWidth >= 640 && isMenuOpen) {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <NavContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        links,
        toggleSidebar,
        closeSidebar,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
