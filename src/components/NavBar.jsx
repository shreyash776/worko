// // src/components/Navbar.jsx
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//    <nav className="bg-transparent z-50 p-4 ">
   
//       <div className="container  mx-auto flex justify-between items-center ">
//         <div className={`text-white text-3xl z-80 font-bold ${isOpen ? 'hidden' : 'block'}`}>
//          worko.ai
//         </div>
//         <div className="block lg:hidden z-50">
//           <button onClick={toggleMenu} className="text-white focus:outline-none z-50">
//             <svg
//               className="w-6 h-6 "
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <div className={`w-full block flex-grow lg:flex lg:items-center z-50 lg:w-auto ${isOpen ? 'block mt-4' : 'hidden'} lg:block`}>
//           <div className="lg:flex-grow"></div>
//           <div className="text-center lg:text-right">
//             <a href="/" className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
//               Home
//             </a>
//             <a href="/login" className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
//               Login
//             </a>
//             <a href="/signup" className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
//               Signup
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;










import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { LoggedInContext } from '../context/LoggedInContext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
  const { isLoggedIn, username } = useContext(LoggedInContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const Delete = () => {
  
   localStorage.removeItem('username'); 
   localStorage.removeItem('referrals');
    navigate('signup');
  };
  return (
    <nav className="bg-transparent z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-white text-3xl z-80 font-bold ${isOpen ? 'hidden' : 'block'}`}>
          <a href='/'>Worko.ai</a>
        </div>
        <div className="block lg:hidden z-50">
          <button onClick={toggleMenu} className="text-white focus:outline-none z-50">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center z-50 lg:w-auto ${isOpen ? 'block mt-4' : 'hidden'} lg:block`}>
          <div className="lg:flex-grow"></div>
          <div className="text-center lg:text-right">
            {isLoggedIn ? (
              // If logged in, show logout button and username
              <>
                <span className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                  Welcome, {username}!
                </span>
                <button
                 onClick={Delete}
                  className="block text-xl mt-4 lg:inline-block border-2 text-white p-1 rounded hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              // If not logged in, show login and signup links
              <>
              <Link to="/" className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                  Home
                </Link>
                <Link to="/login" className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                  Login
                </Link>
                <Link to="/signup" className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
                  Signup
                </Link>
               
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

