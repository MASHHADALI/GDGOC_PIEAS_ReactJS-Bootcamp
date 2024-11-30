import React, { useContext } from "react";
import { BookContext } from "./BookContext";

const FavBooks = () => {
  const { favBooks } = useContext(BookContext);

  return (
    <div className="section">
      <h2>Favorite Books</h2>
      <ul>
        {favBooks.length > 0 ? (
          favBooks.map((title, index) => <li key={index}>{title}</li>)
        ) : (
          <p>No favorite books yet.</p>
        )}
      </ul>
    </div>
  );
};

export default FavBooks;