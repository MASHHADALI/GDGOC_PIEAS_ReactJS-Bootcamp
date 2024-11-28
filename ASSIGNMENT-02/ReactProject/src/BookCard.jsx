const BookCard = ({ title, author, rating, genre }) => {
    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px", borderRadius: "5px" }}>
            <h2>{title}</h2>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Rating:</strong> {rating}</p>
            <p><strong>Genre:</strong> {genre}</p>
        </div>
    );
};

export default BookCard;