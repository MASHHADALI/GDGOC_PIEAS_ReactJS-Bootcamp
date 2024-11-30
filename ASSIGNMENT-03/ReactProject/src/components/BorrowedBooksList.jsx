import React, { useContext } from "react";
import { BookContext } from "./BookContext";

const BorrowedBooks = () => {
  const { borrowedBooks } = useContext(BookContext);

  return (
    <div className="section">
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.length > 0 ? (
          borrowedBooks.map((title, index) => <li key={index}>{title}</li>)
        ) : (
          <p>No borrowed books yet.</p>
        )}
      </ul>
    </div>
  );
};

export default BorrowedBooks;