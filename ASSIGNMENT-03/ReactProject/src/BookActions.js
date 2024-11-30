import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

const BookActions = () => {
  const { setBorrowedBooks, setFavBooks } = useContext(BooksContext);

  const borrowBook = (bookTitle) => {
    setBorrowedBooks((prev) => [...prev, bookTitle]);
  };

  const addToFavorites = (bookTitle) => {
    setFavBooks((prev) => [...prev, bookTitle]);
  };

  return (
    <div>
      <button onClick={() => borrowBook('The Great Gatsby')}>Borrow "The Great Gatsby"</button>
      <button onClick={() => addToFavorites('1984')}>Add "1984" to Favorites</button>
    </div>
  );
};

export default BookActions;
