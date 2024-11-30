
import React from "react"
import { useContext } from "react";
import { FavBooksContext } from "../App";

const FavBooks=()=>{
    const { favBooks } = useContext(FavBooksContext);
    return(
        <div style={{backgroundColor:"white", marginLeft:"80px",marginRight:"80px", marginTop:"20px"}}><h1 style={{color:"green"}}>Favourite Books</h1>
        {favBooks.length > 0 ? (
        favBooks.map((book) => (
        <p style={{color:"black"}}>{book}</p>
        ))
        )
        :(
        <p style={{color:"black"}}>No Fav books yet.</p>
        )}
        </div>
    )

}
export default FavBooks;
