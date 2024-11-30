import React from "react";
import { Books } from "./books";
import BookCard from "./BookCard";

const BookDetails = () => (
  <div>
    <h2>Book Details</h2>
    {Books.map((book) => (
      <BookCard key={book.id} {...book} />
    ))}
  </div>
);

export default BookDetails;