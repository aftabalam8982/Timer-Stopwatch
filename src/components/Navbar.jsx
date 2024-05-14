import React from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#F9A825" : "",
    };
  };

  return (
    <div className='relative w-full bg-white'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8'>
        <div className='inline-flex items-center space-x-2'>
          <span className='font-bold text-2xl'>Clock</span>
        </div>
        <div className='hidden lg:block'>
          <ul className='inline-flex space-x-8'>
            <NavLink
              to='stopwatch'
              style={navLinkStyle}
              className='text-lg font-bold text-gray-800 hover:text-gray-900'
            >
              STOPWATCH
            </NavLink>
            <NavLink
              to='timer'
              style={navLinkStyle}
              className='text-lg font-bold text-gray-800 hover:text-gray-900'
            >
              TIMER
            </NavLink>
          </ul>
        </div>

        <div className='lg:hidden'>
          <Menu onClick={toggleMenu} className='h-6 w-6 cursor-pointer' />
        </div>
        {isMenuOpen && (
          <div className='absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden'>
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pb-6 pt-5'>
                <div className='flex items-center justify-between'>
                  <div className='inline-flex items-center space-x-2'>
                    <span className='font-extrabold text-2xl'>Clock</span>
                  </div>
                  <div className='-mr-2'>
                    <button
                      type='button'
                      onClick={toggleMenu}
                      className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                    >
                      <span className='sr-only'>Close menu</span>
                      <X className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-4'>
                    <NavLink
                      to='stopwatch'
                      style={navLinkStyle}
                      className='-m-3 flex items-center rounded-md p-3 text-sm font-bold hover:bg-gray-50'
                    >
                      <span className='ml-3 text-lg font-extrabold text-gray-900'>
                        STOPWATCH
                      </span>
                    </NavLink>
                    <NavLink
                      to='timer'
                      style={navLinkStyle}
                      className='-m-3 flex items-center rounded-md p-3 text-sm font-bold hover:bg-gray-50'
                    >
                      <span className='ml-3 text-lg font-extrabold text-gray-900'>
                        TIMER
                      </span>
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
