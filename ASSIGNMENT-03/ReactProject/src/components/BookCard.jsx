import React from "react";
import Button from "./Button";
import "./App.css";

const BookCard = ({ title, author, rating, genre }) => (
  <div className="book-card">
    <h3>{title}</h3>
    <p>
      <strong>Author:</strong> {author}
    </p>
    <p>
      <strong>Rating:</strong> {rating}
    </p>
    <p>
      <strong>Genre:</strong> {genre}
    </p>
    <Button title={title} />
  </div>
);

export default BookCard;