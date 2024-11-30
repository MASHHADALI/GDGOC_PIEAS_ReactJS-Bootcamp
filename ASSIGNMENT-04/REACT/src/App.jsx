
import BookList from './components/BookList';
import React, { createContext, useState, useEffect, useContext } from 'react';
import BorrowedBooks from './components/BorrowedBooks';
import FavBooks from './components/FavBooks';

export const BooksContext = createContext();
export const BorrowedBooksContext = createContext();
export const FavBooksContext = createContext();

function App() {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5174/books');
        const data = await response.json();
        setBooks(data);

      } catch (error) {
        console.log(error)

      }

    };

    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books }}>
      <BorrowedBooksContext.Provider value={{ borrowedBooks, setBorrowedBooks }}>
        <FavBooksContext.Provider value={{ favBooks, setFavBooks }}>
          <div style={{ height: "auto", display: "flex", flexDirection: "column", backgroundColor: "black", padding: "20px", textAlign: "center" }}>
            <h1 style={{ color: "white", fontSize: "2rem", marginBottom: "20px" }}>Library Manager</h1>
            <BookList />
            <BorrowedBooks />
            <FavBooks />
          </div>
        </FavBooksContext.Provider>
      </BorrowedBooksContext.Provider>
    </BooksContext.Provider>
  )
}

export default App
