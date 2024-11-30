
import React from "react";
import { Books } from "./books";

const BookAuthors = () => (
  <div>
    <h2>Book Authors</h2>
    <ul>
      {[...new Set(Books.map((book) => book.author))].map((author, index) => (
        <li key={index}>{author}</li>
      ))}
    </ul>
  </div>
);

export default BookAuthors;
