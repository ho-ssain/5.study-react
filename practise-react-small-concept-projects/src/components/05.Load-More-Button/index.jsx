/* eslint-disable no-unused-vars */
import { useState } from "react";
import loadingGif from "../../assets/loading.gif";
import "./style.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  if (loading) {
    return <img src={loadingGif} alt="Loading" />;
  }

  return <div className="load-more-container"></div>;
};

export default LoadMore;
