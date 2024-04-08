import { FC } from "react";
import Book from "../components/Book/Book";
import "./BookList.scss";
import bookImage_1 from "../assets/01-img.jpg";
import bookImage_2 from "../assets/02-img.jpg";
import bookImage_3 from "../assets/03-img.jpg";
import bookImage_4 from "../assets/04-img.jpg";
import bookImage_5 from "../assets/05-img.jpg";
import bookImage_6 from "../assets/06-img.jpg";
import bookImage_7 from "../assets/07-img.jpg";
import bookImage_8 from "../assets/08-img.jpg";
import bookImage_9 from "../assets/09-img.jpg";
import bookImage_10 from "../assets/10-img.jpg";

const books = [
  {
    title: "How to be a stoic",
    author: "J.K. Rowling",
    image: bookImage_1,
    id: 1,
  },
  {
    title: "The Stoics",
    author: "Brad Inwood",
    image: bookImage_2,
    id: 2,
  },
  {
    title: "Discourses and Selected Writings",
    author: "Epictetus",
    image: bookImage_3,
    id: 3,
  },
  {
    title: "Letter from a Stoic",
    author: "Seneca",
    image: bookImage_4,
    id: 4,
  },
  {
    title: "The Stoics",
    author: "Marcus Aurelius",
    image: bookImage_5,
    id: 5,
  },
  {
    title: "Stoicism The Inner piece and Confidence",
    author: "Charles Abort",
    image: bookImage_6,
    id: 6,
  },
  {
    title: "Daily Stoicism Bible 2024",
    author: "Christopher White",
    image: bookImage_7,
    id: 7,
  },
  {
    title: "Stoicism Simply Explained",
    author: "James Anderson",
    image: bookImage_8,
    id: 8,
  },
  {
    title: "Applied Stoicism",
    author: "R.K Jones",
    image: bookImage_9,
    id: 9,
  },
  {
    title: "Practical Stoicism",
    author: "David Dillinger",
    image: bookImage_10,
    id: 10,
  },
];

const getBook = (getId: number) => {
  // const book = books.filter((book) => book.id === getId);
  const book = books.find((book) => book.id === getId);
  // console.log(book?.title);
  alert(`${book?.title} is Listed on the Cart!`);
};

const BookList: FC = () => (
  <section>
    {/* <EventExample /> */}
    <h1>Stoic BookList:</h1>
    <div className="book-list">
      {books.map((book) => (
        <Book {...book} key={book.id} getBook={getBook} />
      ))}
    </div>
  </section>
);

export default BookList;
