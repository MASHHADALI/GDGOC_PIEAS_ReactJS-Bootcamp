import React from 'react'
import { useContext } from 'react'
import { BorrowedBooksContext, FavBooksContext } from '../App';
const Button = ({ bookTitle })=>{
  const { borrowedBooks, setBorrowedBooks } = useContext(BorrowedBooksContext);
  const { favBooks, setFavBooks } = useContext(FavBooksContext);

  const handleAddBorrowedBook = () => {
    setBorrowedBooks([...borrowedBooks, bookTitle]);
  };

  const handleAddFavBook = () => {
    setFavBooks([...favBooks, bookTitle]);
  };
    return (
    <div>
    <button style={{backgroundColor:"red",marginRight:"20px"}} onClick={handleAddBorrowedBook}>Add Me</button>
    <button onClick={handleAddFavBook}>Favourite</button>
    </div>
    )
}
export default Button