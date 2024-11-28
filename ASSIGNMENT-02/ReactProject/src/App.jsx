
import React from "react";
import HighRateBook from "./HighRateBook";
import BookDetails from "./BookDetails";
import FictionBooks from "./FictionBooks";
import BookAuthors from "./BookAuthor";
import './App.css'

const App = () => {
    return (
        <>
        <div id="app">
      
            <h1> Manager</h1>
            <HighRateBook />
            <BookDetails />
            <FictionBooks />
            <BookAuthors />
            </div>
        </>
    );
};

export default App;
