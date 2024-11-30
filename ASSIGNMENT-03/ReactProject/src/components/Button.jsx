import React, { useContext } from "react";
import { BookContext } from "./BookContext";
import "./App.css";

const Button = ({ title }) => {
  const { addBorrowedBook, addFavBook } = useContext(BookContext);

  return (
    <div className="button-container">
      <button onClick={() => addBorrowedBook(title)}>Click Me</button>
      <button onClick={() => addFavBook(title)}>Favorite</button>
    </div>
  );
};

export default Button;