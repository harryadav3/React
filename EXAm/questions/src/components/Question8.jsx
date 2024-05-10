import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { fetchBooks } from '../redux/bookSlice';
const Question8 = () => {
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector((state) => state.books);
  
    useEffect(() => {
      dispatch(fetchBooks());
    }, [dispatch]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    return (
      <div>
        <h2>Book List</h2>
        <ul>
          {/* {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))} */}
        </ul>
      </div>
    );
}

export default Question8