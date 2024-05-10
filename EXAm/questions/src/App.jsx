import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Question5 from './components/Question5';
import Question6 from './components/Question6';
import Question7 from './components/Question7';
import Question8 from './components/Question8';
import Question9 from './components/Question9';
import Question10 from './components/Question10';
import Question11 from './components/Question11';
import Question12 from './components/Question12';
import Question13 from './components/Question13';
import Question14 from './components/Question14'; 
import Question15 from './components/Question15';
import Question16 from './components/Question16';
import Question17 from './components/Question17';
import Question18 from './components/Question18';
import Question19 from './components/Question19';
import Question20 from './components/Question20';



// Import the other question components here

function App() {
  return (
    <Router>
      <div className="flex ">
        <nav className="bg-gray-800  text-white p-4">
          <ul>
            <li>
              <Link to="/" className="block py-2 px-4 hover:bg-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/question1" className="block py-2 px-4 hover:bg-gray-700">
                Question 1
              </Link>
            </li>
            <li>
              <Link to="/question2" className="block py-2 px-4 hover:bg-gray-700">
                Question 2
              </Link>
            </li>
            <li>
              <Link to="/question3" className="block py-2 px-4 hover:bg-gray-700">
                Question 3
              </Link>
            </li>
            <li>
              <Link to="/question4" className="block py-2 px-4 hover:bg-gray-700">
                Question 4
              </Link>
            </li>
            <li>
              <Link to="/question5" className="block py-2 px-4 hover:bg-gray-700">
                Question 5
              </Link>
            </li>
            <li>
              <Link to="/question6" className="block py-2 px-4 hover:bg-gray-700">
                Question 6
              </Link>
            </li>
            <li>
              <Link to="/question7" className="block py-2 px-4 hover:bg-gray-700">
                Question 7
              </Link>
            </li>
            <li>
              <Link to="/question8" className="block py-2 px-4 hover:bg-gray-700">
                Question 8
              </Link>
            </li>
            <li>
              <Link to="/question9" className="block py-2 px-4 hover:bg-gray-700">
                Question 9
              </Link>
            </li>
            <li>
              <Link to="/question10" className="block py-2 px-4 hover:bg-gray-700">
                Question 10
              </Link>
            </li>
            <li>
              <Link to="/question11" className="block py-2 px-4 hover:bg-gray-700">
                Question 11
              </Link>
            </li>
            <li>
              <Link to="/question12" className="block py-2 px-4 hover:bg-gray-700">
                Question 12
              </Link>
            </li>
            <li>
              <Link to="/question13" className="block py-2 px-4 hover:bg-gray-700">
                Question 13
              </Link>
            </li>
            <li>
              <Link to="/question14" className="block py-2 px-4 hover:bg-gray-700">
                Question 14
              </Link>
            </li>
            <li>
              <Link to="/question15" className="block py-2 px-4 hover:bg-gray-700">
                Question 15
              </Link>
            </li>
            <li>
              <Link to="/question16" className="block py-2 px-4 hover:bg-gray-700">

                Question 16
              </Link>
            </li>
            <li>
              <Link to="/question17" className="block py-2 px-4 hover:bg-gray-700">
                Question 17
              </Link>
            </li>
            <li>
              <Link to="/question18" className="block py-2 px-4 hover:bg-gray-700">
                Question 18
              </Link>
            </li>
            <li>
              <Link to="/question19" className="block py-2 px-4 hover:bg-gray-700">
                Question 19
              </Link>
            </li>
            <li>
              <Link to="/question20" className="block py-2 px-4 hover:bg-gray-700">
                Question 20
              </Link>
            </li>
            {/* Add links for the other question components here */}
          </ul>
        </nav>

        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question1" element={<Question1 />} />
            <Route path="/question2" element={<Question2 />} />
            <Route path="/question3" element={<Question3 />} />
            <Route path="/question4" element={<Question4 />} />
            <Route path="/question5" element={<Question5 />} />
            <Route path="/question6" element={<Question6 />} />
            <Route path="/question7" element={<Question7 />} />
            <Route path="/question8" element={<Question8 />} />
            <Route path="/question9" element={<Question9 />} />
            <Route path="/question10" element={<Question10 />} />
            <Route path="/question11" element={<Question11 />} />
            <Route path="/question12" element={<Question12 />} />
            <Route path="/question13" element={<Question13 />} />
            <Route path="/question14" element={<Question14 />} />
            <Route path="/question15" element={<Question15 />} />
            <Route path="/question16" element={<Question16 />} />
            <Route path="/question17" element={<Question17 />} />
            <Route path="/question18" element={<Question18 />} />
            <Route path="/question19" element={<Question19 />} />
            <Route path="/question20" element={<Question20 />} />


            {/* Add routes for the other question components here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;