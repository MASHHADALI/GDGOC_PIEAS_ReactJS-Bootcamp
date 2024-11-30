
import React from "react";
import { Books } from "./books";
import BookCard from "./BookCard";

const HighRatedBooks = () => (
  <div>
    <h2>High Rated Books</h2>
    {Books.filter((book) => book.rating > 4.5).map((book) => (
      <BookCard key={book.id} {...book} />
    ))}
  </div>
);

export default HighRatedBooks;
