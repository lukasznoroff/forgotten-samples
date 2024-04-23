// import { useState, useEffect, useRef } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { ROUTE } from '@/data/routes';
// import gsap from 'gsap';

// import { Menu, X } from 'lucide-react';

// export function Navbar() {
 

 

//   const NavLinks = () => {
//     return (
//       <>
//         <NavLink to={ROUTE.HOME}>Home</NavLink>

//         <NavLink to={ROUTE.SAMPLES}>Samples</NavLink>
//         <NavLink to={ROUTE.CART}>Cart</NavLink>
//       </>
//     );
//   };

//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   return (
//     <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
//       <div className="flex">
//         <NavLink to="/">Forgotten Samples</NavLink>
//       </div>
//       <nav className=" bg-slate-400">
//         <div className="hidden justify-end md:flex">
//           <NavLinks />
//         </div>
//         <div className="flex w-[75px] justify-end md:hidden">
//           <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
//         </div>
//       </nav>
//       {isOpen && (
//         <div className="  bg-slate-400 mt-4 basis-full md:hidden absolute top-[120%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
//           <div>
//             <NavLink to="/home">Home</NavLink>
//           </div>
//           <div>
//             <NavLink to="/cart">cart</NavLink>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }






// import { useState, useEffect, useRef } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { ROUTE } from '@/data/routes';
// import gsap from 'gsap';

// import { Menu, X } from 'lucide-react';

// export function Navbar() {
 




import { useState, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTE } from '@/data/routes';

import { Menu, X } from 'lucide-react';

export function Navbar() {

 

  const NavLinks = () => {
    return (
      <>
        <NavLink to={ROUTE.HOME}>Home</NavLink>

        <NavLink to={ROUTE.SAMPLES}>Samples</NavLink>
        <NavLink to={ROUTE.CART}>Cart</NavLink>
      </>
    );
  };


  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false); // Explicitly close the navbar
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Function to toggle body scroll lock based on isOpen state
    const toggleBodyScroll = () => {
      const body = document.querySelector('body');
      if (body) {
        if (isOpen) {
          // Disable scrolling
          body.style.overflow = 'hidden';
        } else {
          // Enable scrolling
          body.style.overflow = 'auto';
        }
      }
    };

    // Call toggleBodyScroll when isOpen changes
    toggleBodyScroll();

    // Cleanup function to remove event listener
    return () => {
      toggleBodyScroll(); // Restore scrolling when component unmounts
    };
  }, [isOpen]); // Run effect when isOpen state changes

  return (
    <header className="sticky top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2rem] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
    <div className="flex">
      <NavLink to="/">Forgotten Samples</NavLink>
    </div>
    <nav className="bg-slate-400">
      <div className="hidden justify-end md:flex">
        <NavLinks />
      </div>
      <div className="flex w-[75px] justify-end md:hidden">
        <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
      </div>
    </nav>
    <div
      className={`absolute left-0 top-[calc(100%-1rem)] transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}
    >
      <div className="bg-gray-200 mt-4 p-4 rounded-lg text-center w-[100vw] h-[100vh] ">
        <div>
          <NavLink to="/home" onClick={closeNavbar}>Home</NavLink>
        </div>
        <div>
          <NavLink to="/cart" onClick={closeNavbar}>Cart</NavLink>
        </div>
      </div>
    </div>
  </header>

  );
}






