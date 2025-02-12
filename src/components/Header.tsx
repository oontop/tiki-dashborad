// import { useMenu } from '../contexts/MenuContext';
// import { FiMenu } from 'react-icons/fi';
import DarkModeToggle from './DarkModeToggle';
import { Link } from 'react-router-dom';

import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react';


const Header = () => {
  // const { isOpen, toggleMenu } = useMenu();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <img src="/OnTopLogoPng.png" alt="Logo" className="w-10 h-10 mr-2" />
          <Link to="/">
            <h1 className="text-2xl" >OonTop <span className="text-base">Health</span> </h1>
          </Link>
        </div>
        <SignedOut>
            <SignInButton>
              <div className="oontop-extension-auth-button" style={{ cursor: 'pointer' }}>
                Login
              </div>
            </SignInButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton>
            <div className="oontop-extension-auth-button" style={{ cursor: 'pointer' }}>
              Logout
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
