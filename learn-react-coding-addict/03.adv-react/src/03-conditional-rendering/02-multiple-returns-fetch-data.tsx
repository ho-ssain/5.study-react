/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchUser = async () => {
    const url = "https://api.github.com/users/ho-ssain";
    try {
      const response = await fetch(url);
      // console.log("🚀 ~ fetchUser ~ response:", response);

      if (!response.ok) {
        throw new Error("404 Not found!");
      }

      const data = await response.json();
      setUser(data);
    } catch (error: any) {
      setIsError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // console.log(user);
  // console.log(isLoading);

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) return <h3>Error-: {isError}</h3>;

  if (user) {
    const { login, avatar_url, bio } = user;
    return (
      <div>
        <img
          src={avatar_url}
          alt={login}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "40px 20px 40px 20px",
          }}
        />
        <p>{bio}</p>
      </div>
    );
  }
};

export default MultipleReturnsFetchData;
