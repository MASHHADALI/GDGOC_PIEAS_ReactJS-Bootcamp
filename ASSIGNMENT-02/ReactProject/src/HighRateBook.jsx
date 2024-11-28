
import React from "react";
import { books } from "./book.js";
import BookCard from "./BookCard";

const HighRateBooks = () => {
    const highRatedBooks = books.filter(book => book.rating > 4.5);

    return (
        <>
        <h1 style={
            {
                backgroundColor:"grey"
            }
        }>High Rated Books</h1>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
           backgroundColor:"gold",
           border:"4px solid red"
        }}>
            {highRatedBooks.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
        </>
    );
};

export default HighRateBooks;
