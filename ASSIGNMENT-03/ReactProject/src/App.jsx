import React from "react";
import HighRatedBooks from "./Components/HighRatedBooks";
import BookDetails from "../Components/BookDetails";
import FictionBooks from "../Components/FictionBooks";
import BorrowedBooks from "../Components/BorrowedBooks";
import FavBooks from "../Components/FavBooks";
import BookProvider from "./Components/BookContext";
import "./App.css";

const App = () => (
  <BookProvider>
    <div className="app-container">
      <h1>Library</h1>
      <HighRatedBooks />
      <FictionBooks />
      <BorrowedBooks />
      <FavBooks />
      <BookDetails />
    </div>
  </BookProvider>
);

export default App;