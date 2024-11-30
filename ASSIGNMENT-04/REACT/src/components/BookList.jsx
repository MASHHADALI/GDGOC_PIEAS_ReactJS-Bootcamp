
import Button from './Button'
const BookCard = ({ title, author, rating, genre }) => (
    <div style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        width: '250px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'left'
      }}>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <p>Genre: {genre}</p>
      <Button bookTitle={title}/>
    </div>
  );
  
  export default BookCard;
  
