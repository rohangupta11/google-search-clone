import React from 'react';
import {Link} from 'react-router-dom';
import Search from "./Search";
const Navbar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
         <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
                <p className="text-2xl text-gray-100 bg-blue-700 font-bold py-1.5 px-2.5 rounded dark:bg-gray-500 dark:text-gray-900">Google</p>
            </Link>
            <button type='button' onClick={() => setDarkTheme(!darkTheme)} className="text-xl text-gray-200 dark:bg-gray-50 dark:text-gray-900 bg-gray-600 border rounded-full px-3 py-2 hover:shadow-lg">
                {darkTheme? "🔆 Light " : "🌙 Dark "}
            </button>
         </div>
         <Search />
    </div>
  )
}

export default Navbar;