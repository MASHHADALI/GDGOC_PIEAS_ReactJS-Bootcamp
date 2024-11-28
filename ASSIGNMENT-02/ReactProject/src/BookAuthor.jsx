
import React from "react";
import { books } from "./book.js";

const BookAuthors = () => {
    const authors = books.map(book => book.author);

    return (
    <div style={{
        backgroundColor:"yellowgreen",
        border:"4px solid red",
        
    }}>
            <h1>Book Authors</h1>
            <ul>
                {authors.map((author, index) => (
                    <li key={index}>{author}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookAuthors;
