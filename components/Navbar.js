// import Link from 'next/link'
// import { useState } from "react";


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
//               aria-label="Main menu"
//               aria-expanded="false"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <svg
//                 className="h-6 w-6"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex-shrink-0">
//               <img
//                 className="block h-8 w-auto"
//                 src="/images/logo.svg"
//                 alt="Logo"
//               />
//             </div>
//             <div className="hidden sm:block sm:ml-6">
//               <div className="flex">
//                 <Link href='/summary'>
//                   <a className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Summary</a>
//                 </Link>
//                 <Link href='/devrelpillars'>
//                   <a className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">DevRel Pillars</a>
//                 </Link>
//                 <Link href='/jobs'>
//                   <a className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Jobs</a>
//                 </Link>
//                 <Link href='/advice'>
//                   <a className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Advice</a>
//                 </Link>
//                 <Link href='/resources'>
//                   <a className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Resources</a>
//                 </Link>
//                 <Link href='/contributors'>
//                   <a className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Contributors</a>
//                 </Link>
//                 <Link href='/cfp'>
//                   <a className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">CFP</a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
//         <div className="px-2 pt-2 pb-3">
//           <Link href='/summary'>
//             <a className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Summary</a>
//           </Link>
//           <Link href='/devrelpillars'>
//             <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">DevRel Pillars</a>
//           </Link>
//           <Link href='/jobs'>
//           <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Jobs</a>
//           </Link>
//           <Link href='/advice'>
//             <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Advice</a>
//           </Link>
//           <Link href='/resources'>
//             <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Resources</a>
//           </Link>
//           <Link href='/contributors'>
//             <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Contributors</a>
//           </Link>
//           <Link href='/cfp'>
//             <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">CFP</a>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => {
  const handleNavigation = (sectionId) => {
    window.location.hash = sectionId;
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.png" alt="Workflow logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white text-gray-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                  onClick={() => handleNavigation("#summary")}
                >
                  Summary
                </button>
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white text-gray-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                  onClick={() => handleNavigation("#jobs")}
                >
                  Jobs
                </button>
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white text-gray-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                  onClick={() => handleNavigation("#advice")}
                >
                  Advice
                </button>
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white text-gray-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                  onClick={() => handleNavigation("#contributors")}
                >
                  Contributors
                </button>
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white text-gray-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                  onClick={() => handleNavigation("#cfp")}
                >
                  CFP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
