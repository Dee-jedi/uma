import { NavContextProvider } from './context/NavContext';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="lg:px-16 p-4 mx-auto max-w-7xl ">
      <NavContextProvider>
        <NavBar />
      </NavContextProvider>
    </header>
  );
};

export default Header;
