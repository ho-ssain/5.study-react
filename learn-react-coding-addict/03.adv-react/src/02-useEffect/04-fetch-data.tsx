import { useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const url = "https://api.github.com/users";
    const options = { method: "GET" };

    try {
      const response = await fetch(url, options);
      const users = await response.json();
      // console.log("🚀 ~ fetchUser ~ users:", users);
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <section>
      <h3>Git-hub Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login} </h3>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchData;
