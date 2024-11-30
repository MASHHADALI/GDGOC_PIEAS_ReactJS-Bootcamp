import React, { createContext, useState } from "react";

// Create the Context
export const BookContext = createContext();

// Context Provider
const BookProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  // Add to borrowedBooks
  const addBorrowedBook = (title) => {
    if (!borrowedBooks.includes(title)) {
      setBorrowedBooks([...borrowedBooks, title]);
    }
  };

  // Add to favBooks
  const addFavBook = (title) => {
    if (!favBooks.includes(title)) {
      setFavBooks([...favBooks, title]);
    }
  };

  return (
    <BookContext.Provider
      value={{ borrowedBooks, favBooks, addBorrowedBook, addFavBook }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;