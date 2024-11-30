import React from "react";
import { Books } from "./books";
import BookCard from "./BookCard";

const FictionBooks = () => (
  <div>
    <h2>Fiction Books</h2>
    {Books.filter((book) => book.genre.toLowerCase() === "fiction").map(
      (book) => (
        <BookCard key={book.id} {...book} />
      )
    )}
  </div>
);

export default FictionBooks;