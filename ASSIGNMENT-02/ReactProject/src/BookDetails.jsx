
import React from "react";
import { books } from "./book.js";

import BookCard from "./BookCard";

const BookDetails = () => {
    return (
        <div style={{
            backgroundColor:"yellowgreen",
            border:"4px solid red"
        }}>
            <h1   style={
                {
                    backgroundColor:"grey"
            }}> Book Details</h1>
            {books.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
};

export default BookDetails;
