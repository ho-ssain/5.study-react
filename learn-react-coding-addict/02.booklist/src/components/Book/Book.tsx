import { FC } from "react";
import "./Book.scss";
import Ratings from "../Ratings/Ratings";

interface BookProps {
  id: number;
  title: string;
  author: string;
  image: string;
  getBook(id: number): void;
}

const Book: FC<BookProps> = (props) => {
  const { title, author, image, getBook, id } = props;
  return (
    <article className="Book">
      <p className="serial-number">{id}</p>
      <img src={image} alt="bookImage_1" />
      <h3 className="book-title">{title} </h3>
      <h4 className="book-author">{author} </h4>

      <div className="details">
        <Ratings stars={5} />
        <p>Paperback</p>
        <p>Price: $20</p>
      </div>

      <button className="buy-btn" onClick={() => getBook(id)}>
        Buy
      </button>
    </article>
  );
};

export default Book;
