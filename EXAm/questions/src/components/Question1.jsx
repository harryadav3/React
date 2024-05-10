
import React from 'react'

const Question1 = () => {
    return (
        <>
        <div>Question1</div>
        <h1> Navbar for library management </h1>
        <Navbar/>
        </>
        )
    }
    
    
    
    import { Link } from 'react-router-dom';
    
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 rounded-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-xl font-bold">
            Student Library
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/books" className="hover:text-gray-300">
              Books
            </Link>
          </li>
          <li>
            <Link to="/borrowing" className="hover:text-gray-300">
              Borrowing
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};



export default Question1